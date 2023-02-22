import React, { useState } from "react";
import "./VerifyPhone.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from '../../config'
import { Link } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import { async } from "@firebase/util";
export default function VerifyPhone() {
    let navigate = useNavigate();
    const [value, setValue] = useState()
    const [number, setNumber] = useState("");
    const [flag, setFlag] = useState(false)
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [opt, setOpt] = useState("");
    const [apiLoader, setApiLoader] = useState(false)
    const handleOtp = () => {
        navigate("/verifyOtp")
    }

    const submitNumber = async () => {

        if (number == "" || number === null) {
            setError("Please enter a valid number")
        } else {
            setApiLoader(true)
            const response = await setUpRecaptcha(number);
            console.log("responose :", response)
            setResult(response
            )
            setFlag(true)
            // setApiLoader(false)
        }
    }

    const setUpRecaptcha = (number) => {
        const recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            auth
        )
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier)
    }

    // verifyOtp
    const verifyOtp = () => {
        if (opt == "" || opt === null) {
            setError("Please enter a valid otp")
        } else {
            result.confirm(opt).then((res) => {
                console.log("res:", res.uid)
                localStorage.setItem('uid', res.uid)
                navigate("/")
            }).catch((err) => {
                console.log("err:", err)
            })
        }

    }

    console.log(opt, number)

    return (
        <div className="card card-1" id="login__admin">
            {!flag ? (

                <p className="paragraph ">
                    Enter your phone number to verify your account
                </p>
            ) : null

            }
            <div
                className="py-2 mb-3 mt-1 formBtns"
                style={{
                    display: flag ? "none" : "block",
                }}
            >
                <div className="phone">
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={number}
                        international
                        onChange={
                            (e) => {
                                setNumber(e)
                            }
                        }
                    />
                </div>
                <p className="phone__input-info">
                    Enter Your Number With Country Code EX:+92
                </p>
                <div className="error">
                    {error}
                </div>


                <div id="recaptcha-container"></div>
                {!apiLoader && (
                    <div className="otp">
                        <button
                            className="btns"
                            onClick={submitNumber}
                        >
                            Continue
                        </button>
                    </div>
                )}
            </div>
            <div className="formData" style={{ display: flag ? "block" : "none" }}>

                <Form.Group className="mb-3" controlId="formBasicOtp">
                    <Form.Control
                        type="otp"
                        placeholder="Enter OTP"
                        onChange={(e) => setOpt(e.target.value)}
                    />
                </Form.Group>
                <div className="right button-right">
                    <Link to="/">
                        <Button variant="secondary">Cancel</Button>
                    </Link>
                    &nbsp;
                    <Button
                        type="submit"
                        variant="primary"
                        onClick={verifyOtp}
                    >
                        Verify
                    </Button>
                </div>
            </div>

            {/* <div className="phone">
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue} />
                </div>
                <div className="otp">
                    <button className="btns" onClick={handleOtp} >Send Otp</button>
                </div> */}
        </div>

    )
}