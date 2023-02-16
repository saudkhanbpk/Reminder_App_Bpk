import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginAdmin.css";
import { userLogin } from "../services/Auth/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginUser() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState('');
    let navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        let payload = { email, password }
        userLogin(payload).then((res) => {
            console.log(res.token)
            localStorage.setItem("loginToken",res.token)
            setTimeout(()=>{
                navigate("/addFile")
                 },1000)
            toast.success('User Login Successfully',{theme:"colored"})
        }).catch((err) => {
            console.log(err)
            toast.error("Something Went Wrong",{theme:"colored"})
        });
    }

    const handleChange = (e) => {
        setEmail(e.target.value)


    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const showPasswordHandler = () => {
        setShowPassword(!showPassword)
    }
    return (

        <div className="card card-1">
            <h3 className="staff"><p>Admin</p>/<p className="stf" onClick={() => navigate("/loginStaff")}>Staff</p></h3>
            <form onSubmit={handleSubmit} className="inputForm">
                <input className="field" type="text" id="email" value={email} placeholder="Enter Email" onChange={handleChange} /> <br />
                <input className="field" type={showPassword ? "text" : "password"} id="password" value={password} placeholder="Enter Password" onChange={handlePassword} />
                <div>
                    <input type="checkbox" onClick={showPasswordHandler} className="check" />&nbsp; show password <br></br>
                    <button className="sub" type="submit">Admin Login </button>
                </div>
            </form>
            <ToastContainer />
        </div>

    )
}