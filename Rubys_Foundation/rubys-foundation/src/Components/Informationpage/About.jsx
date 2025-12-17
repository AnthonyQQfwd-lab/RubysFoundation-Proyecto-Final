import React from 'react'
import '../../Styles/InformationPage/InformationPage.css'

function About() {
  return (
    <div id="aboutPageContainer">
      <div className="aboutCard">

        <h1 className="aboutTitle">About Us</h1>

        <p className="aboutText">
          We are a platform dedicated to pet adoption, search, and rescue.
          Our goal is to connect animals in need with people willing to offer
          them love, care, and a second chance.
        </p>

        <div className="aboutSection">
          <h2>Our Vision</h2>
          <p>
            We envision a better world with no stray animals, where every pet
            has a safe and loving home. We strive to make the adoption process
            easier, helping people find their ideal companion quickly and safely.
          </p>
        </div>

        <div className="aboutSection">
          <h2>Our Mission</h2>
          <p>
            Our mission is to reduce animal suffering by promoting responsible
            adoption, rescue efforts, and awareness about animal welfare.
            Every action counts toward improving the lives of those who cannot speak for themselves.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
