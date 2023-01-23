import React from "react";
import Login from "./components/User_Login/Login";
import Navbar from "./components/Navbar/Navbar";
import AddFile from "./components/AddFile/AddFile";
import LoginAdmin from "./components/User_Login/LoginAdmin";
import LoginStaff from "./components/User_Login/LoginStaff";
import {
    BrowserRouter as Router,
    Route,
    HashRouter,
    Link,
    BrowserRouter,
    Routes,
    useLocation,
  } from "react-router-dom";
import VerifyPhone from "./components/User_Login/VerifyPhone";
import VerifyOtp from "./components/User_Login/VerifyOtp";
export default function RouterComponent(){
    return(
        
           
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/addFile" element={<AddFile />}/>
                <Route path="/verifyphone" element={<VerifyPhone />}/>
                <Route path="/verifyOtp" element={<VerifyOtp />}/>
                <Route path="/loginAdmin" element={<LoginAdmin />}/>
                <Route path="loginStaff" element={<LoginStaff />}/>
            </Routes>
            </BrowserRouter>
    
    )
}