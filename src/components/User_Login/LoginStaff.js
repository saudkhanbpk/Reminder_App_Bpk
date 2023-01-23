import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginStaff.css"
export default function LoginStaff (){
let navigate =useNavigate()
    return (

        <div className="card card-1">
                <h3 className="stfForm"><p className="stf" onClick={()=>navigate("/loginAdmin")}>Admin</p>/<p>Staff</p></h3>
                <form className="FormInput">
                <input  className="fieldInput" type="number"  placeholder="Enter UserId" /> <br />
                <input  className="fieldInput" type="password" placeholder="Enter Password" />
                <div>
                    <button className="sub" type="submit" >Staff Login </button>
                </div>
                </form>
        </div>
    )
}