import React from 'react'
import ReportsOutput from '../../Components/ModeratorPage/ReportsOutput'
import NavBar from '../../Components/NavBar'
function AdminPage() {
  return (
    <div>
        <NavBar />
        <ReportsOutput reportGrade={2} />
    </div>
  )
}

export default AdminPage