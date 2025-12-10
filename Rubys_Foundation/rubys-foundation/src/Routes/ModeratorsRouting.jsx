import React from 'react';
import { Navigate } from 'react-router-dom';

const ModeratorsRouting = ({ children }) => {
    const isAuthenticated = localStorage.getItem("access");
    const currentUser = sessionStorage.getItem('currentUser');
    const isMod = currentUser ? JSON.parse(currentUser) : null;

    if (isAuthenticated && isMod && isMod.usertype === 2) {
        return children;
    } else {
        return <Navigate to="/Login" />;
    }
};

export default ModeratorsRouting;
