import React, { useState } from 'react';
import "./SignUp.css";
import { IoMdContact } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";
import { useFormik } from 'formik';
import { signUp } from '../services/Auth/auth';
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri"
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [loader, setLoader] = useState();
    const [showpassword, setShowPassword] = useState(false);

    const formik = useFormik({

        initialValues: {
            name: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: values => {
            setLoader(true)
            console.log("onSubmit", values)
            signUp(values).then((res) => {

                console.log('welcom', res);
                toast.success("Data Register Successfully", {
                    theme: "colored",
                });
                setLoader(false)
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            }).catch((err) => {
                toast.error("Something went wrong", {
                    theme: "colored",
                })
                console.log('error', err)
                setLoader(false)
            })

        },

        validate: values => {
            let errors = {}
            if (!values.name) {
                errors.name = "Name Required"
            }
            if (!values.email) {
                errors.email = "Email Required"
            }
            else if (!/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email format"
            }
            if (!values.confirmPassword) {
                errors.confirmPassword = "Confirm Password Required"
            }
            if (!values.phoneNumber) {
                errors.phoneNumber = "Phone Number Required"
            }
            if (!values.password) {
                errors.password = "Password Required"
            }
            if (values.confirmPassword !== values.password) {
                errors.confirmPassword = "Password & confirm Password must be same"
            }
            return errors
        }

    })
    const showPasswordHandler = () => {
        setShowPassword(!showpassword)
    }

    let navigate = useNavigate();
    return (
        <div>
            <div className="card card-1">
                <form onSubmit={formik.handleSubmit} className='inputdataf'>
                    <div>
                        <span className='Io'> <IoMdContact /></span>
                        <input className='box' id='name' type="text" placeholder="Enter your name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} /> <br />
                        {formik.touched.name && formik.errors.name ? <div className='er'>{formik.errors.name}</div> : null}</div>
                    <div> <span className='Ai'><AiTwotoneMail /></span>
                        <input className='box' type="text" id='email' placeholder="Enter your email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} /> <br />
                        {formik.touched.email && formik.errors.email ? <div className='er'>{formik.errors.email}</div> : null}
                    </div>
                    <div>
                        <span className='Ai'><BsFillTelephoneFill /></span>
                        <input className='box' type="number" id='phoneNumber' placeholder="Enter your phone number" values={formik.values.phoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} /> <br />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div className='er'>{formik.errors.phoneNumber}</div> : null}
                    </div>
                    <div>
                        <span className='Ai'><RiLockPasswordFill /></span>
                        <input className='box' type={showpassword ? "text" : "password"} id='password' placeholder="Enter your password" values={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} /> <br />
                        {formik.touched.password && formik.errors.password ? <div className='er'>{formik.errors.password}</div> : null}
                    </div>
                    <div>
                        <span className='Ai'><RiLockPasswordFill /></span>
                        <input className='box' type={showpassword ? "text" : "password"} id='confirmPassword' placeholder="Enter your confirm password" values={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} /> <br />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className='er'>{formik.errors.confirmPassword}</div> : null}
                    </div>
                    <div className="show-password mt-3">
                        <input
                            type="checkbox"
                            name="showPassword"
                            id="showPassword"
                            onClick={showPasswordHandler}
                        />
                        &nbsp;
                        <label htmlFor="showPassword">Show Password</label>
                    </div>
                    <div className='sgup' >
                        <button disabled={loader} className='SiUpBtn'>SignUp</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

