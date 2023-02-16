import React, { useState } from "react";
import "./VerifyPhone.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from "react-router-dom";
export default function VerifyPhone() {
    let navigate = useNavigate();
    const [value, setValue] = useState('');

    const handleOtp = () => {
        navigate("/verifyOtp")
    }

    return (
        <div className="card card-1">
            <div>
            <form>
                <div className="phone">
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue} />
                </div>
                <div className="otp">

                    <button className="btns" onClick={handleOtp} >Send Otp</button>
                </div>
            </form>
  </div>

        </div>

    )
}