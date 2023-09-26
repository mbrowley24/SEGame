import React, {useMemo, useState} from "react";
import useGeneralValidation from "../hooks/useGeneralValidation";
import useHttp from "../hooks/useHttp";
import {useNavigate} from "react-router-dom";
import  '../css/generalCss.css'




const ResetPassword = props =>{
    const [resetPassword, setResetPassword] = useState({password: "", confirmPassword: ""});
    const match = useMemo(() => resetPassword.password === resetPassword.confirmPassword, [resetPassword.password, resetPassword.confirmPassword]);
    const {postHttpRequest} = useHttp();
    const {passwordInputValidation} = useGeneralValidation();
    const navigate = useNavigate();

    const inputChange = (e) =>{
        
        const resetPasswordObj = {...resetPassword};

        if(passwordInputValidation(e.target.value)){

            resetPasswordObj[e.target.name] = e.target.value;
        
        }
        
        console.log(match)
        console.log(passwordInputValidation(resetPasswordObj.password))
        setResetPassword(resetPasswordObj);
    }

    const resetPasswordSubmit = async (e) =>{
        e.preventDefault();

        const requestConfig = {
            url: "user/reset-password",
            data: resetPassword,
        }

        const applyData = (res) =>{
            console.log(res);
            if(res.status === 200){
                console.log("Password reset successful");
                navigate("/dashboard");    
            }
        }

        await postHttpRequest(requestConfig, applyData);
    };

    return(
        <div className="container-fluid height101 bg-light-gray">
            <div className="row">
                <div className="col-12 py-2 my-2">
                    <h1>Change Password</h1>
                </div>
                <form onSubmit={resetPasswordSubmit}
                    className="w-25 m-auto bg-dark-green rounded-3 p-3"
                >
                    <div className="input-field">
                        <label>New Password</label>
                        <input type="password" 
                                name="password"
                                value={resetPassword.password}
                                onChange={(e)=>inputChange(e)}
                        />
                    </div>
                    <div className="input-field">
                        <label>Confirm Password</label>
                        <input type="password" 
                                name="confirmPassword"
                                value={resetPassword.confirmPassword}
                                
                                onChange={(e)=>inputChange(e)}
                        />
                    </div>
                    <button className="btn-small"
                        disabled={!match}
                    >
                        save
                    </button> 
                </form>
            </div>
        </div>
    )
};   
export default ResetPassword;