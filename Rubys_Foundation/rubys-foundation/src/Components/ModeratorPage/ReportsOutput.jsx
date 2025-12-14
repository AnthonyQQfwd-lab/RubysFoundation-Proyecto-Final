import React, {useEffect, useState, useRef} from 'react'
import { getReports } from '../../Services/ServicesReports'
import { getPublications, updatePublications } from '../../Services/ServicesPublications'
import { getUser, getUsers, updateUsers } from '../../Services/ServicesUsers'
import { updateReport } from '../../Services/ServicesReports'
import { getPublication } from '../../Services/ServicesPublications'
import CardsOutPut from '../HomePage/CardsOutPut'
import CardsOutputReports from './CardsOutputReports'
import '../../Styles/ModeratorPage/ModeratorPage.css';


function ReportsOutput({reportGrade}) {
    const confirmApproveDialog = useRef(null)
    const confirmDenyDialog = useRef(null)
    const [reports, setReports] = useState([])
    const [publications, setPublications] = useState([])
    const [users, setUsers] = useState([])

    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const [report, setReport] =useState({})
    const [approveDescription, setApproveDescription] = useState("")
    useEffect(() => {
        async function getData() {
            const reports = await getReports();
            setReports(reports)
            const publications = await getPublications();
            setPublications(publications)
            const users = await getUsers();
            setUsers(users)
        }
        getData();
    }, []);

    async function approveReport() {

        if (!approveDescription || approveDescription.trim() === "") {
            alert("Moderator description is empty");
            return
        }

        if(reportGrade === 1){
            const reportUpdate = {
                moderatorDescription: approveDescription,
                reportGrade: 2,                     
                moderator: Number(currentUser.id)   
            };

            const reportedPublication = await getPublication(report.reportedPublication)
            console.log(reportedPublication)

            const publicationUpdate = {
                ...reportedPublication,
                isHidden: true   
            }
            const updatedReport = await updateReport(report.id, reportUpdate);
            const updatedPublication = await updatePublications(report.reportedPublication, publicationUpdate)


            console.log(updatedPublication)
            console.log(updatedReport)
        }
        else if(reportGrade === 2){
            const reportUpdate = {
                adminDescription: approveDescription,
                reportGrade: 3,                     
                administrator: Number(currentUser.id)   
            };

            const reporteduser = await getUser(report.reportedUser)
            const reportedPublication = await getPublication(report.reportedPublication)

            const userUpdate = {
                ...reporteduser,
                isBanned: true
            }

            const publicationUpdate = {
                ...reportedPublication,
                isHidden: true   
            }

            const updatedUser = await updateUsers(report.reportedUser, userUpdate)
            const updatedPublication = await updatePublications(report.reportedPublication, publicationUpdate)
            const updatedReport = await updateReport(report.id, reportUpdate);

            console.log(updatedUser)
            console.log(updatedPublication)
            console.log(updatedReport)
        }

        
    }

    async function denyReport() {
        if (!approveDescription || approveDescription.trim() === "") {
            alert("Moderator description is empty");
            return
        }
        console.table(report)
        if(reportGrade === 1){
            const reportUpdate = {
                moderatorDescription: approveDescription,
                reportGrade: 4,                     
                moderator: Number(currentUser.id)   
            };
            const publicationUpdate = {
                isHidden: false
            }
            const updatedReport = await updateReport(report.id, reportUpdate);
            const updatedUser = await updatePublications(report.reportedpublication, publicationUpdate)
            console.log(updatedUser)
            console.log(updatedReport)
            
        }
        else if(reportGrade === 2){
            const reportUpdate = {
                adminDescription: approveDescription,
                reportGrade: 4,                     
                administrator: Number(currentUser.id)   
            };
            const publicationUpdate = {
                isHidden: false
            }
            const updatedPublication = await updatePublications(report.reportedPublication, publicationUpdate)
            const updatedReport = await updateReport(report.id, reportUpdate);


            console.log(updatedPublication)
            console.log(updatedReport)
        }
    }



  const openModalConfirmApproveReport = () => {
    confirmApproveDialog.current.showModal();
  };
  const closeModalConfirmApproveReport = () => {
    confirmApproveDialog.current.close();
  };

  const openModaldenyReport = () => {
    confirmDenyDialog.current.showModal();
  };
  const closeModalconfirmDenyReport = () => {
    confirmDenyDialog.current.close();
  };


  return (
    <div>
        <div id="confirmApproveDialogContainer">
            <dialog ref={confirmApproveDialog} id='confirmApproveDialog'>
            <p>Why do you approve the report?</p>
            <textarea
                value={approveDescription}
                placeholder="leave a comment"
                className="commentBox"
                onChange={(e) => setApproveDescription(e.target.value)}
            ></textarea>
                <button className="closeBtn" onClick={closeModalConfirmApproveReport}>x</button>
                <button onClick={approveReport}>confirm approve</button>
            </dialog>
        </div>

        <div id="confirmDenyDialogContainer">
            <dialog ref={confirmDenyDialog} id="confirmDenyDialog">
                <p>Why deny the report?</p>
                <textarea
                    value={approveDescription}
                    placeholder="leave a comment"
                    className="commentBox"
                    onChange={(e) => setApproveDescription(e.target.value)}
                ></textarea>
                <button onClick={denyReport}>confirm deny</button>
                <button className="closeBtn" onClick={closeModalconfirmDenyReport}>x</button>
            </dialog>
        </div>

        <div id="reportsCardsContainer">
            {reports.filter(report => report.reportGrade === reportGrade).map((report) => { 
                const reportedUser = users.find(user => user.id == report.reportedUser)
                const reporterUser = users.find(user => user.id == report.reporterUser)
                const publication = publications.find(publication => publication.id === report.reportedPublication)
                return (
                    <div key={report.id} className='reportCards'>
                        <h2>{report.problem} Report </h2>
                        <p>Reported publication of: {reportedUser?.firstName} {reportedUser?.lastName}</p>
                        <CardsOutputReports publication={publication}  />
                        <p>Reported by: {reporterUser?.firstName } {reporterUser?.lastName}</p>
                        <p>{report.userDescription}</p>
                        <button onClick={() => {openModalConfirmApproveReport(); setReport(report) }}>approve</button>
                        <button onClick={() => {openModaldenyReport(); setReport(report) }}>deny</button>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default ReportsOutput