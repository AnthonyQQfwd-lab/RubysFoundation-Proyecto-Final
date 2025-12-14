import React from 'react'
import '../../Styles/ModeratorPage/ModeratorPage.css';
import ReportsOutput from '../../Components/ModeratorPage/ReportsOutput';
import NavBar from '../../Components/NavBar'
import CardsTicketsOutput from '../../Components/ModeratorPage/CardsTicketsOutput';
import { getTickets } from '../../Services/ServicesTickets';
import CardsOutPut from '../../Components/HomePage/CardsOutPut';


function ModeratorPage() {



  return (
    <div>
        <NavBar />
        <div id="reportsOutPutContainer">
          <ReportsOutput reportGrade={1} />
        </div>
        <div id="ticketsOutputContainer">
          <CardsTicketsOutput ticketstatus={1}/>
        </div>
         
    </div>


  )
}

export default ModeratorPage