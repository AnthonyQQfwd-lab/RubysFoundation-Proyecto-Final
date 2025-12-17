import React, { useEffect, useState, useRef } from 'react'
import { getReports, updateReport } from '../../Services/ServicesReports'
import { getPublications, updatePublications, getPublication } from '../../Services/ServicesPublications'
import { getUser, getUsers, updateUsers } from '../../Services/ServicesUsers'
import CardsOutputReports from './CardsOutputReports'
import '../../Styles/ModeratorPage/ModeratorPage.css'

function ReportsOutput({ reportGrade }) {

  const confirmApproveDialog = useRef(null)
  const confirmDenyDialog = useRef(null)

  const [reports, setReports] = useState([])
  const [publications, setPublications] = useState([])
  const [users, setUsers] = useState([])
  const [report, setReport] = useState({})
  const [approveDescription, setApproveDescription] = useState('')

  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'))

  useEffect(() => {
    async function getData() {
      setReports(await getReports())
      setPublications(await getPublications())
      setUsers(await getUsers())
    }
    getData()
  }, [])

  async function approveReport() {
    if (!approveDescription.trim()) return alert('Description required')

    if (reportGrade === 1) {
      const reportedPublication = await getPublication(report.reportedPublication)

      await updatePublications(report.reportedPublication, {
        ...reportedPublication,
        isHidden: true
      })

      await updateReport(report.id, {
        moderatorDescription: approveDescription,
        reportGrade: 2,
        moderator: Number(currentUser.id)
      })
    }

    if (reportGrade === 2) {
      const reportedUser = await getUser(report.reportedUser)
      const reportedPublication = await getPublication(report.reportedPublication)

      await updateUsers(report.reportedUser, {
        ...reportedUser,
        isBanned: true
      })

      await updatePublications(report.reportedPublication, {
        ...reportedPublication,
        isHidden: true
      })

      await updateReport(report.id, {
        adminDescription: approveDescription,
        reportGrade: 3,
        administrator: Number(currentUser.id)
      })
    }

    confirmApproveDialog.current.close()
  }

  async function denyReport() {
    if (!approveDescription.trim()) return alert('Description required')

    await updatePublications(report.reportedPublication, { isHidden: false })

    await updateReport(report.id, {
      reportGrade: 4,
      moderatorDescription: approveDescription,
      administrator: Number(currentUser.id)
    })

    confirmDenyDialog.current.close()
  }

  return (
    <div id="reportsPage">

      <dialog ref={confirmApproveDialog} className="confirmDialog">
        <h3>Approve report</h3>
        <textarea
          className="commentBox"
          placeholder="Leave a comment"
          value={approveDescription}
          onChange={e => setApproveDescription(e.target.value)}
        />
        <div className="dialogActions">
          <button className="secondaryBtn" onClick={() => confirmApproveDialog.current.close()}>Cancel</button>
          <button className="primaryBtn" onClick={approveReport}>Approve</button>
        </div>
      </dialog>

      <dialog ref={confirmDenyDialog} className="confirmDialog">
        <h3>Deny report</h3>
        <textarea
          className="commentBox"
          placeholder="Leave a comment"
          value={approveDescription}
          onChange={e => setApproveDescription(e.target.value)}
        />
        <div className="dialogActions">
          <button className="secondaryBtn" onClick={() => confirmDenyDialog.current.close()}>Cancel</button>
          <button className="dangerBtn" onClick={denyReport}>Deny</button>
        </div>
      </dialog>

      <div id="reportsCardsContainer">
        {reports
          .filter(r => r.reportGrade === reportGrade)
          .map(r => {
            const reportedUser = users.find(u => u.id === r.reportedUser)
            const reporterUser = users.find(u => u.id === r.reporterUser)
            const publication = publications.find(p => p.id === r.reportedPublication)

            return (
              <div key={r.id} className="reportCard">
                <h3>{r.problem}</h3>
                <p className="muted">Reported publication of {reportedUser?.firstName} {reportedUser?.lastName}</p>

                <CardsOutputReports publication={publication} />

                <p className="muted">Reported by {reporterUser?.firstName} {reporterUser?.lastName}</p>
                <p>{r.userDescription}</p>

                <div className="actions">
                  <button className="primaryBtn" onClick={() => { setReport(r); confirmApproveDialog.current.showModal() }}>
                    Approve
                  </button>
                  <button className="dangerBtn" onClick={() => { setReport(r); confirmDenyDialog.current.showModal() }}>
                    Deny
                  </button>
                </div>
              </div>
            )
          })}
      </div>

    </div>
  )
}

export default ReportsOutput
