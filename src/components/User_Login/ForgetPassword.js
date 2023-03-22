import React, { useState } from "react";
import "./ForgetPassword.css"
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "../../services/Auth/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ForgetPassword() {
    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let payload = { email, password }
        forgetPassword(payload).then((res) => {
            navigate("/loginAdmin")
            toast.success('Password Reset Successfully', { theme: "colored" })
        }).catch((err) => {
            console.log(err)
            toast.error("Something Went Wrong", { theme: "colored" })
        });
    }

    return (
        <div className="card card-1" id="login__admin">
            <form onSubmit={handleSubmit} className="inputForm">
                <input
                    className="field"
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Enter Email"
                    onChange={handleChange}
                />
                <br />
                <input className="field"
                    type={password ? "text" : "password"}
                    id="password" value={password}
                    placeholder="Enter Password"
                    onChange={handlePassword}
                />
                <br />
                <button className="sub" type="submit">Reset Password</button>
            </form>
            <ToastContainer />
        </div>
    )
}