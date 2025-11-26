import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/NavBar/NavBar.css';

function NavBar() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

  console.log("Usuario ---------",currentUser)

  function LogOut(){
    sessionStorage.removeItem("currentUser");
    localStorage.removeItem("access");
    navigate("/Login");
  }

  return (
    <div id="navBar">
        <button onClick={() => navigate('/Home')}>Home</button>
        <button onClick={() => navigate('/Profile')}>Profile</button>
        <button onClick={() => navigate('/Chat')}>Chat</button>
        <button onClick={() => navigate('/Information')}>Information</button>
        <button onClick={() => navigate('/Lost')}>Lost</button>
        <button onClick={() => navigate('/Donation')}>Donation</button>
        <button onClick={() => navigate('/Post')}>Post</button>
        <button onClick={LogOut}>Log out</button>
        <h1>{currentUser?.firstName} {currentUser?.lastName}</h1>

    </div>
  )
}

export default NavBar;