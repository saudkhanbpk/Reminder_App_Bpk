import React from "react";
import Login from "./components/User_Login/Login";
import Navbar from "./components/Navbar/Navbar";
import AddFile from "./components/AddFile/AddFile";
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
                <Route path="/login" element={<Login />}/>
                <Route path="/addFile" element={<AddFile />}/>
                <Route path="/verifyphone" element={<VerifyPhone />}/>
                <Route path="/verifyOtp" element={<VerifyOtp />}/>
            </Routes>
            </BrowserRouter>
    
    )
}