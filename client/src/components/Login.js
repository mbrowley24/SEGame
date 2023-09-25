import React, {useEffect, useState} from "react";
import useHttp from "../hooks/useHttp";
import { useNavigate, Link } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import {playerActions} from "../store/playerData";
import {passwordActions}  from "../store/resetPassword";
import "../css/generalCss.css"

const Login = props =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {postHttpRequest} = useHttp();
    const [login, setLogin] = useState({username: "", password: ""})
    const player = useSelector(state => state.playerData);

    const inputChange = (e) =>{

        const loginObj = {...login}

        loginObj[e.target.name] = e.target.value;

        setLogin(loginObj);
    }

    useEffect(() => {

        if(player.username.length > 0){
            window.location.reload(true);
            console.log("reset game and player data");
        }
    },[]);


    const submitLogin = async(e) =>{
        e.preventDefault()

        const requestConfig= {
            url: "login",
            data: login,
            method: "POST",
        }

        const handleLogin = (res) =>{
        
            if(res.status === 200){

                const {name, username} = res.data.userLoggedIn;
                console.log(res.data.userLoggedIn);
                dispatch(playerActions.setPlayer({name: name, username: username, score:0}));
                console.log(res.data.userLoggedIn);
                if(res.data.userLoggedIn.reset_password){
                    console.log("reset password");
                    const {password} = login
                    console.log(password);
                    dispatch(passwordActions.setPassword(password));
                    navigate("/reset_password");

                }else{
                    
                    navigate("/dashboard");
                }

                
            }
        }

        await postHttpRequest(requestConfig, handleLogin)
    }


    return(
        <div className={'height101 border d-flex bg-light-gray px-3'}>
            <div className="m-auto w-25 align-self-center ">
                <div className={'m-auto w-100 height100'}>
                    <h1 className=" text-dark">SE Games</h1>
                </div>
                <div className="w-50 m-auto input-field">
                    <label className="fw-bold">Username</label>
                    <input className={''}
                        type={'text'}
                        name={"username"}
                        value={login.username}
                        onChange={(e)=>inputChange(e)}
                    />
                </div>
                <div className="w-50 m-auto input-field">
                    <label className="fw-bold">Password</label>
                    <input className={''}
                        type={'password'}
                        name={'password'}
                        value={login.password}
                        onChange={(e)=>inputChange(e)}
                    />
                </div>
                <div className="text-center m-auto my-3 ">
                    <button className="m-auto btn-small" label={'Login'} onClick={(e)=>submitLogin(e)} >Login</button><br/>
                    <div className={'p-3'}>
                        <Link
                        className={"text-capitalize text-dark"}
                            to={'/join'}
                        >join game</Link>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default Login
