import React, {useEffect, useState} from 'react'
import { getReports } from '../../Services/ServicesReports'
import { getPublications } from '../../Services/ServicesPublications'
import { getUser, getUsers } from '../../Services/ServicesUsers'
import { updateReport } from '../../Services/ServicesReports'
import { getPublication } from '../../Services/ServicesPublications'
import CardsOutPut from '../HomePage/CardsOutPut'
import CardsOutputReports from './CardsOutputReports'
import '../../Styles/ModeratorPage/ModeratorPage.css';


function ReportsOutput({reportGrade}) {
    reportGrade = 1
    const [reports, setReports] = useState([])
    const [publications, setPublications] = useState([])
    const [users, setUsers] = useState([])

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
        
    }

  return (
    <div>
        

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
                        <button onClick={approveReport}>approve</button>
                        <button>deny</button>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default ReportsOutput