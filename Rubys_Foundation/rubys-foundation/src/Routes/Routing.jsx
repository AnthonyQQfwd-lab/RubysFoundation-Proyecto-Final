import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouting from "./PrivateRouting";
import ModeratorsRouting from "./ModeratorsRouting";

import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import HomePage from "../Pages/HomePage/HomePage";
import ChatPage from "../Pages/ChatPage/ChatPage";
import DionationPage from "../Pages/DonationPage/DionationPage";
import InformationPage from "../Pages/InformationPage/InformationPage";
import LostPage from "../Pages/LostPage/LostPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import PostPage from "../Pages/PostPage/PostPage";
import ReportPage from "../Pages/ReportPage/ReportPage";
import HelpPage from "../Pages/HelpPage/HelpPage";
import ModeratorPage from "../Pages/ModeratorPage/ModeratorPage";
import AdminPage from "../Pages/AdminPage/AdminPage";
import TicketPage from "../Pages/TicketPage/TicketPage";
import EditPublicationPage from "../Pages/EditPublicationPage/EditPublicationPage";
import DeletePublicationPage from "../Pages/DeletePublicationPage/DeletePublicationPage";


function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Home" element={<PrivateRouting><HomePage /></PrivateRouting>} />
        <Route path="/Chat" element={<PrivateRouting><ChatPage /></PrivateRouting>} />
        <Route path="/Donation" element={<PrivateRouting><DionationPage /></PrivateRouting>} />
        <Route path="/Information" element={<PrivateRouting><InformationPage /></PrivateRouting>} />
        <Route path="/Lost" element={<PrivateRouting><LostPage /></PrivateRouting>} />
        <Route path="/profile/:id" element={<PrivateRouting><ProfilePage /></PrivateRouting>} />
        <Route path="/Post" element={<PrivateRouting><PostPage /></PrivateRouting>} />
        <Route path="/Report" element={<PrivateRouting><ReportPage /></PrivateRouting>} />
        <Route path="/Help" element={<PrivateRouting><HelpPage /></PrivateRouting>} />
        <Route path="/Ticket" element={<PrivateRouting><TicketPage /></PrivateRouting>} />
        <Route path="/ModDashboard" element={<ModeratorsRouting userType={2}><ModeratorPage /></ModeratorsRouting>} />
        <Route path="/AdminDashboard" element={<ModeratorsRouting userType={3}><AdminPage /></ModeratorsRouting>} />
        <Route path="/EditPublication" element={<PrivateRouting><EditPublicationPage /></PrivateRouting>} />
        <Route path="/DeletePublication" element={<PrivateRouting><DeletePublicationPage /></PrivateRouting>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;