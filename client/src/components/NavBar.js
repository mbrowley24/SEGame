import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import {useDispatch} from "react-redux";
import {playerActions} from "../store/playerData";
import {gameActions} from "../store/gameData";
import '../css/navBarCss.css';
const NavBar = props =>{
    const {postHttpRequest} = useHttp();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = async () =>{

        const configRequest = {
            url: 'logout',
            data: null
        };

        const applyData = res =>{
            console.log(res.data);
            dispatch(playerActions.resetData());
            dispatch(gameActions.resetGame());
            navigate("/")
        };

        await postHttpRequest(configRequest, applyData);
    }

    return(
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-nav container-fluid">
                <div className ="container-fluid">
                    <Link to="/dashboard" className="navbar-brand">Dashboard</Link>
                    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className ="navbar-toggler-icon"></span>
                    </button>
                    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
                        {/*<li className="nav-item dropdown">*/}
                        {/*    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*/}
                        {/*       data-bs-toggle="dropdown" aria-expanded="false">*/}
                        {/*        Accounts*/}
                        {/*    </a>*/}
                        {/*    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                        {/*        <li>*/}
                        {/*            <Link className="dropdown-item text-capitalize" to={'/accounts'}>*/}
                        {/*                accounts dashboard*/}
                        {/*            </Link>*/}
                        {/*        </li>*/}
                        {/*        /!*<li>*!/*/}
                        {/*        /!*    <Link className="dropdown-item text-capitalize" to={'/accounts/new'}>*!/*/}
                        {/*        /!*        accounts*!/*/}
                        {/*        /!*    </Link>*!/*/}
                        {/*        /!*</li>*!/*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                        {/*<li className ="nav-item">*/}
                        {/*<Link className ="nav-link active text-capitalize" to={"/dashboard"} aria-current="page">accounts</Link>*/}
                        {/*</li>*/}
                        {/*<li className ="nav-item">*/}
                        {/*<Link to={"/leads"} className ="nav-link text-capitalize" >leads</Link>*/}
                        {/*</li>*/}
                        {/*/!* <li className ="nav-item dropdown">*/}
                        {/*<Link to={"/"} className ="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">*/}
                        {/*    Dropdown*/}
                        {/*</Link>*/}
                        {/*<ul className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                        {/*    <li><Link to={"/"} className ="dropdown-item">Action</Link></li>*/}
                        {/*    <li><Link to={"/"} className ="dropdown-item" href="#">Another action</Link></li>*/}
                        {/*    <li><hr className ="dropdown-divider"/></li>*/}
                        {/*    <li><Link to={"/"} className ="dropdown-item" href="#">Something else here</Link></li>*/}
                        {/*</ul>*/}
                        {/*</li> *!/*/}
                        {/*/!* <li className="nav-item">*/}
                        {/*<Link to={"/"} className="nav-link disabled" tabIndex="-1" aria-disabled="true">Disabled</Link>*/}
                        {/*</li> *!/*/}
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-success"
                                type="submit"
                                onClick={logout}
                        >LogOut</button>
                    </form>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar