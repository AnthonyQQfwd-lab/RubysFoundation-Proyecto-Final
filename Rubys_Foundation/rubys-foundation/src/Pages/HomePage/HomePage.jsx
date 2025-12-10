import React from 'react'
import NavBar from '../../Components/NavBar'
import CardsOutPut from '../../Components/HomePage/CardsOutPut'
import '../../Styles/HomePage/HomePage.css';
function HomePage() {
  return (
    <div >
        <header><NavBar /></header>
        <CardsOutPut publicationsType="Adopcion" />
    </div>
  )
}

export default HomePage