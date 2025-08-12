import React from 'react'
import { Navigate, Outlet, useLocation } from "react-router-dom"


const PrivateOne = ({ children }) => {
       const accessToken = window.localStorage.getItem("accessToken");
    const refreshToken = window.localStorage.getItem("refreshToken");
    const location = useLocation();
    return (

        <>
          {(accessToken || refreshToken) ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />}
        </>
    )
}

export default PrivateOne