import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";


function Routing() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<LoginPage/>} />
        </Routes>
    </BrowserRouter >
  )
}

export default Routing