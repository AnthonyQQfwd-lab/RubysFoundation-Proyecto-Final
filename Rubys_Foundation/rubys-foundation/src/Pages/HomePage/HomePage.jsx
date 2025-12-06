import React from 'react'
import NavBar from '../../Components/NavBar'
import CardsOutPut from '../../Components/HomePage/CardsOutPut'
import '../../Styles/HomePage/HomePage.css';
function HomePage() {
  return (
    <div >
        <header><NavBar /></header>
        <div id="cardsOutPutContainer"><CardsOutPut /></div>
        


    </div>
  )
}

export default HomePage