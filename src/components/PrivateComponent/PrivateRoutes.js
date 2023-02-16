import React from "react";
import { Navigate, Outlet } from "react-router-dom"
export default function PrivateRoutes() {
    const localData = localStorage.getItem("loginToken")
    const localEmail = localStorage.getItem("email")
    const phoneId = localStorage.getItem('uid')
    return localData || localEmail || phoneId ? <Outlet /> : <Navigate to="/login" />;
}