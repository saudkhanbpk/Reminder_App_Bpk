import React from "react";
import { Navigate, Outlet } from "react-router-dom"
export default function PrivateRoutes() {
    const localData = localStorage.getItem("loginToken")
    const localEmail = localStorage.getItem("email")
    return localData || localEmail ? <Outlet /> : <Navigate to="/" />;
}