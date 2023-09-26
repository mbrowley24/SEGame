import React, { useState } from "react";
import "../css/generalCss.css";
import { Link, useNavigate } from "react-router-dom";
import useHttp from "../hooks/useHttp";

const PasswordRecovery = props =>{

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [showMessage, setMessage] = useState(false);
    const message = () => `You will receive an email with a temp password if a valid email was entered.`
    const {postHttpRequest} = useHttp();

    const inputChange = (e) =>{
        console.log(e.target.value);
        const {value} = e.target;
        setEmail(value);
        console.log(email);
    };

    const submitEmail = async (e) =>{
        e.preventDefault();

        const requestConfig = {
            url: "user/password-recovery",
            data: {email: email},
            method: "POST",
        }

        const applyData = (res) =>{
            console.log(res);
            if(res.status === 200){
                navigate("/");
            }
        }

        await postHttpRequest(requestConfig, applyData);
    }

    return(
        <div className="bg-light-gray height101">
            <div className="height30 d-flex align-items-center justify-content-center ">
                <div>
                    <h1>Recover Password</h1>
                    <Link to="/">Return to Login</Link>
                </div>
            </div>
            <div className="w-25 m-auto">
                <form onSubmit={submitEmail}>
                    <h6>Enter email associated with your account</h6>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                                name="email"
                                id="email"
                                onChange={(e)=>inputChange(e)}
                        />
                    </div>
                    <button className="btn-small">Submit</button>
                </form>
            </div>
        </div>
    )
};
export default PasswordRecovery;