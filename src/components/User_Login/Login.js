import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { FaGoogle } from 'react-icons/fa'
import { BsMicrosoft } from 'react-icons/bs'
import { CgMoreR } from 'react-icons/cg'
import { auth, provider, providere } from "./config"
import { signInWithPopup } from 'firebase/auth'
import './Login.css'
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [value, setValue] = useState('')
    let navigate = useNavigate();

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem('email', data.user.email)
        })
    }
    const handleData = () => {
        signInWithPopup(auth, providere).then((data) => {
            setValue(data.user.email)
            localStorage.setItem('email', data.user.email)
        })
    };

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    }, []);
    const handleLogin = () => {
        navigate("/verifyphone");
    }
    return (
        <div className="card card-1">
            <span className="Header"> <h2>Get Started</h2></span>
            <div className="login">
                <div className="first">
                    <Button className="start" variant="primary" onClick={() => navigate("/loginAdmin")} >Login With Email</Button><br></br>
                    <Button className="start" variant="primary" onClick={handleLogin} >Login With Phone Number</Button><br></br>

                </div>
                <div className="Second">
                    {value ? navigate("/addFile") :
                        <Button className="btn" variant="danger" onClick={handleClick} ><span className="Google" ><FaGoogle /></span>Sign in  with Google</Button>
                    }
                    {value ? navigate("/addFile") :
                        <Button className="btn" variant="primary" onClick={handleData}  ><span className="Microsoft"><BsMicrosoft /></span>Sign in  with Microsoft</Button>
                    }
                    <Button className="showf" ><span className="More"><CgMoreR /></span>Show More</Button>
                </div>
            </div>
            <div className="Signup">
                <p className="coler" onClick={() => navigate("/signUp")}>Sign_Up ?</p>
            </div>
        </div>
    )
}