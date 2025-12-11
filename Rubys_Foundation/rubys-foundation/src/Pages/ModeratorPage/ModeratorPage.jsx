import React from 'react'
import '../../Styles/ModeratorPage/ModeratorPage.css';
import ReportsOutput from '../../Components/ModeratorPage.jsx/ReportsOutput';
import CardsOutPut from '../../Components/HomePage/CardsOutPut';

function ModeratorPage() {
  return (
    <div>
        <div id="reportsOutPutContainer">
          <ReportsOutput reportGrade={1} />
        </div>
         
    </div>


  )
}

export default ModeratorPage