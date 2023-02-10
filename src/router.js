import React from "react";
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
export default function RouterComponent() {
    return (


        <BrowserRouter>
            <Naavbar />
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/addFile" element={<AddFile />} />

                    <Route path="/reminderAlert" element={<ReminderAlert />} />
                    <Route path="reminderservices" element={<ReminderServices />} />
                    <Route path="remindersetting" element={<ReminderSetting />} />
                </Route>
                <Route path="/" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/loginAdmin" element={<LoginAdmin />} />
                <Route path="/loginStaff" element={<LoginStaff />} />
                <Route path="/verifyphone" element={<VerifyPhone />} />
                <Route path="/verifyOtp" element={<VerifyOtp />} />
            </Routes>
        </BrowserRouter>

    )
}
