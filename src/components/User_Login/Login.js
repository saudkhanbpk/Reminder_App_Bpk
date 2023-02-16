import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { FaGoogle } from 'react-icons/fa'
import { BsMicrosoft } from 'react-icons/bs'
import { CgMoreR } from 'react-icons/cg'
import { auth, provider, providere } from "../../config"
import { signInWithPopup } from 'firebase/auth'
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
export default function Login({ setGoogleToken }) {
    const [value, setValue] = useState('')
    let navigate = useNavigate();

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            console.log("dasta:", data.user.uid)
            setValue(data.user.email)
            localStorage.setItem('email', data.user.email)
            setGoogleToken(data.user.email)
            navigate('/')
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
        <div className="card card-1" id="login__admin">
            <span className="Header">Get Started</span>
            <div className="login mt-4">
                <div className="first">
                    <Button className="start" variant="primary" onClick={() => navigate("/loginAdmin")} >Login With UserId</Button><br></br>
                    <Button className="start" variant="primary" onClick={handleLogin} >Login With Phone Number</Button><br></br>

                </div>
                <div className="Second">
                    {/* {value ? navigate("/addFile") : */}
                    <Button className="btn" variant="danger" onClick={handleClick} ><span className="Google" ><FaGoogle /></span>Sign in  with Google</Button>
                    {/* } */}
                    {value ? navigate("/addFile") :
                        <Button className="btn" variant="primary" onClick={handleData}  ><span className="Microsoft"><BsMicrosoft /></span>Sign in  with Microsoft</Button>
                    }
                </div>
            </div>
            <div className="Signup">
                <p className="coler" onClick={() => navigate("/signUp")}>Don't Have An Account? <Link to="/signup">
                    Sign_Up   </Link>  </p>
            </div>
        </div>
    )
}