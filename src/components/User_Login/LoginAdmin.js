import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginAdmin.css";

export default function LoginUser(){
let navigate = useNavigate()
    return (
        
            <div className="card card-1">
                <h3 className="staff"><p>Admin</p>/<p className="stf" onClick={()=>navigate("/loginStaff")}>Staff</p></h3>
                <form className="inputForm">
                <input  className="field" type="number"  placeholder="Enter UserId" /> <br />
                <input  className="field" type="password" placeholder="Enter Password" />
                <div>
                    <button className="sub" type="submit" >Admin Login </button>
                </div>
                </form>
                
                </div> 
    
    )
}