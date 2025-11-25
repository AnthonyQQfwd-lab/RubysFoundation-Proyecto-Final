import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/NavBar/NavBar.css';

function NavBar() {
  const navigate = useNavigate();

  function LogOut(){
    localStorage.removeItem("token");
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
    </div>
  )
}

export default NavBar;