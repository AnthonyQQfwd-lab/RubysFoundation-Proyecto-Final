import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import HomePage from "../Pages/HomePage/HomePage";


function Routing() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<LoginPage/>} />
            <Route path="/Register" element={<RegisterPage/>} />
            <Route path="/Home" element={<HomePage/>} />
        </Routes>
    </BrowserRouter >
  )
}

export default Routing