import React, { useState, useEffect } from "react";
import Login from "./components/User_Login/Login";
import AddFile from "./components/AddFile/AddFile";
import LoginAdmin from "./components/User_Login/LoginAdmin";
import LoginStaff from "./components/User_Login/LoginStaff";
import SignUp from "./components/User_Login/SignUp";
import ReminderAlert from "./components/Reminder/ReminderAlert"
import ReminderServices from "./components/Reminder_Services/Reminder_Services";
import ReminderSetting from "./components/Reminder_Setting/Reminder_Setting";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import VerifyPhone from "./components/User_Login/VerifyPhone";
import VerifyOtp from "./components/User_Login/VerifyOtp";
import Naavbar from "./components/Navbar/Navbar";
import PrivateRoutes from "./components/PrivateComponent/PrivateRoutes";
import GetUser from "./components/CreateUser/GetUser";
export default function RouterComponent() {
    const [token, setToken] = useState()
    const [googleToken, setGoogleToken] = useState()
    const [phoneId, setPhoneId] = useState()

    const phoneAuthentication = () => {
        let uid = localStorage.getItem('uid')
        setPhoneId(uid)
    }
    const google = () => {
        let token = localStorage.getItem("email")
        setGoogleToken(token)
    }
    const userToken = () => {
        let token = localStorage.getItem("loginToken")
        setToken(token)
    }
    useEffect(() => {
        userToken()
    }, [])
    useEffect(() => {
        google()
    }, [])
    useEffect(() => {
        phoneAuthentication()
    }, [])



    return (
        <BrowserRouter>
            {token || googleToken || phoneId ? (<Naavbar setToken={setToken} setGoogleToken={setGoogleToken} setPhoneId={setPhoneId} />) : (null)}
            <Routes>
                <Route element={<PrivateRoutes />}>
                    {localStorage.getItem("role") === "admin" ?
                      <>
                        <Route path="/" element={<GetUser/>} />
                        <Route path="/reminderservices" element={<ReminderServices />} />
                        </> :<>
                    <Route path="/remindersetting" element={<ReminderSetting />} />
                    <Route path="/addFile" element={<AddFile />} />
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path="/reminderAlert" element={<ReminderAlert />} />
                    </>
                    }
                    {/* <Route path="/" element={<Login />} /> */}
                </Route>
                <Route path="/login" element={<Login setGoogleToken={setGoogleToken} />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/loginAdmin" element={<LoginAdmin setToken={setToken} />} />
                <Route path="/loginStaff" element={<LoginStaff />} />
                <Route path="/verifyphone" element={<VerifyPhone setPhoneId={setPhoneId} />} />
                <Route path="/verifyOtp" element={<VerifyOtp />} />
            </Routes>
        </BrowserRouter>

    )
}
