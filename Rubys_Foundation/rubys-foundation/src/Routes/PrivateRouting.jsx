import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouting = ({children}) =>{

    const isAuthenticated = localStorage.getItem("access")

    if(isAuthenticated)
    {
        return children;
    }
    else
    {
        return <Navigate to="/Login" />
    };

}

export default PrivateRouting