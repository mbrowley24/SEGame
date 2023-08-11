import React, {useEffect, useState} from "react";
import useHttp from "../hooks/useHttp";
import { useNavigate, Link } from "react-router-dom";
import {useDispatch } from "react-redux";
import {playerActions} from "../store/playerData";
import {gameActions} from "../store/gameData";
import "../css/generalCss.css"

const Login = props =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {postHttpRequest} = useHttp();
    const [login, setLogin] = useState({username: "", password: ""})

    const inputChange = (e) =>{

        const loginObj = {...login}

        loginObj[e.target.name] = e.target.value;

        setLogin(loginObj);
    }

    useEffect(() => {

        dispatch(gameActions.resetGame());
        dispatch(playerActions.resetData());

        return () => {};

    }, []);


    const submitLogin = async(e) =>{
        e.preventDefault()

        console.log(login);
        const requestConfig= {
            url: "login",
            data: login,
            method: "POST",
        }

        const handleLogin = (res) =>{
            console.log(res);

            if(res.status === 200){
                console.log(res.data.userLoggedIn);
                dispatch(playerActions.setPlayer(res.data.userLoggedIn));
                // console.log(res.headers.authorization);
                navigate("/dashboard")
            }
        }

        await postHttpRequest(requestConfig, handleLogin)
    }


    return(
        <div className={'height925px border login-background px-3'}>
            <div className={'m-auto w-100 height100'}>
                <h1 className="pt-5 text-jeopardy-yellow">SE Jeopardy</h1>
            </div>
            <div className=" overflow-hidden m-auto earth"></div>
            <div className="m-auto w-25 my-5 py-5 ">
                    <div className="w-50 m-auto">
                        <label className="text-jeopardy-yellow fw-bold">Username</label>
                        <input className={'form-control form-control-sm'}
                            name={"username"}
                            value={login.username}
                            onChange={(e)=>inputChange(e)}
                        />
                    </div>
                    <div className="w-50 m-auto">
                        <label className="text-jeopardy-yellow fw-bold"
                        >Password</label>
                        <input className={'form-control form-control-sm'}
                            type={'password'}
                            name={'password'}
                            value={login.password}
                            onChange={(e)=>inputChange(e)}
                        />
                    </div>
                    <div className="text-center m-auto my-3 ">
                        <button className="m-auto btn btn-sm button-jeopardy-orange" label={'Login'} onClick={(e)=>submitLogin(e)} >Login</button><br/>
                        <div className={'p-3'}>
                             <Link
                                className={"text-capitalize text-jeopardy-yellow"}
                                 to={'/join'}
                             >join game</Link>
                        </div>
                    </div>
            </div>
            
        </div>

    )
}

export default Login
