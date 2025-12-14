import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/NavBar/NavBar.css';
import GoTOProfileBtn from './GoTOProfileBtn';
import { getUser } from '../Services/ServicesUsers';

function NavBar() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    

  function LogOut(){
    sessionStorage.removeItem("currentUser");
    localStorage.removeItem("access");
    navigate("/Login");
  }

  
  function goToAdminModPanel(){
    if (currentUser.usertype === 2) { 
      navigate("/modDashboard");
    } else if (currentUser.usertype === 3) {
      navigate("/adminDashboard");
    }
  }
  

  

  return (
    <div id="navBar">
      <header>
        <button onClick={() => navigate('/Home')}>Home</button>
        <button onClick={() => navigate('/Profile')}>Profile</button>
        <button onClick={() => navigate('/Chat')}>Chat</button>
        <button onClick={() => navigate('/Information')}>Information</button>
        <button onClick={() => navigate('/Lost')}>Lost</button>
        <button onClick={() => navigate('/Donation')}>Donation</button>
        <button onClick={() => navigate('/Post')}>Post</button>
        {(currentUser.usertype === 2 || currentUser.usertype === 3) && (
          <button onClick={goToAdminModPanel}>
            {currentUser.usertype === 2 ? "Mod Panel" : "Admin Panel"}
          </button>
        )}
        <button onClick={LogOut}>Log out</button>
        <h3>{currentUser.firstName}</h3>
        <GoTOProfileBtn user={currentUser}/>
      </header>
    </div>
  )
}

export default NavBar;