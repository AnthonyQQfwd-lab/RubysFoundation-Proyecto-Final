import React from 'react'
import NavBar from '../../Components/NavBar'
import CardsOutPut from '../../Components/HomePage/CardsOutPut'
function LostPage() {
  return (
    <div>
        <NavBar />
        <CardsOutPut publicationsType="Lost" />
        <CardsOutPut publicationsType="Wanted" />
    </div>
  )
}

export default LostPage