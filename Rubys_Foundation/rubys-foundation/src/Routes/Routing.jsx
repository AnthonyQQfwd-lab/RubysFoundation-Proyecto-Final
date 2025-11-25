import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import HomePage from "../Pages/HomePage/HomePage";
import ChatPage from "../Pages/ChatPage/ChatPage";
import DionationPage from "../Pages/DonationPage/DionationPage";
import InformationPage from "../Pages/InformationPage/InformationPage";
import LostPage from "../Pages/LostPage/LostPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import PrivateRouting from "./PrivateRouting";
import PostPage from "../Pages/PostPage/PostPage";

function Routing() {
  return (
    <BrowserRouter>
        <Routes>
          
            <Route path="/Login" element={<LoginPage/>} />
            <Route path="/Register" element={<RegisterPage/>} />
            <Route path='Home' element={<PrivateRouting><HomePage /></PrivateRouting>} />
            <Route path="/Chat" element={<PrivateRouting><ChatPage/></PrivateRouting>} />
            <Route path="/Donation" element={<PrivateRouting><DionationPage/></PrivateRouting>} />
            <Route path="/Information" element={<PrivateRouting><InformationPage/></PrivateRouting>} />
            <Route path="/Lost" element={<PrivateRouting><LostPage/></PrivateRouting>} />
            <Route path="/Profile" element={<PrivateRouting><ProfilePage/></PrivateRouting>} />
            <Route path="/Post" element={<PrivateRouting><PostPage/></PrivateRouting>} />
        </Routes>
    </BrowserRouter >
  )
}

export default Routing