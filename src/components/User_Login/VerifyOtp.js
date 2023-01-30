import React from "react";
import "./VerifyOtp.css";
export default function verifyOtp (){
    return (
        <div className="card card-1">
            <form>
            <div className="code">
            <input className="" placeholder="Enter Otp Code"></input>
            </div>
            <span className="Vfy"><button className="btnsd">Verify</button></span>
            </form>
        </div>
    )
}