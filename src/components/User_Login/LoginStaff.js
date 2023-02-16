import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginStaff.css"
import { userLogin } from "../../services/Auth/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function LoginStaff() {
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState('');
    let navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        let payload = { userNumber: userId, password }
        userLogin(payload).then((res) => {
            console.log(res)
            setTimeout(() => {
                navigate("/addFile")
            }, 1000)
            toast.success('User Login Successfully', { theme: "colored" })
        }).catch((err) => {
            console.log(err)
            toast.error("Something Went Wrong", { theme: "colored" })
        });
    }
    const handleChange = (e) => {
        setUserId(e.target.value)


    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const showPasswordHandler = () => {
        setShowPassword(!showPassword)
    }
    return (

        <div className="card card-1" id="login__admin">
            <h3 className="stfForm"><p className="stf" onClick={() => navigate("/loginAdmin")}>Admin</p>/<p>Staff</p></h3>
            <form onSubmit={handleSubmit} className="inputForm">
                <input className="field" type="number" id="userId" value={userId} placeholder="Enter UserId" onChange={handleChange} /> <br />
                <input className="field" type={showPassword ? "text" : "password"} id="password" value={password} placeholder="Enter Password" onChange={handlePassword} />
                <div>
                    {/* <input type="checkbox" onClick={showPasswordHandler} className="check" />&nbsp; show password <br></br> */}
                    <button className="sub" type="submit">Staff Login </button>
                </div>
            </form>
            <ToastContainer />
        </div>

    )
}