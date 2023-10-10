import React, {useCallback} from "react";
import { Link, useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
import useHttp from "../hooks/useHttp";
import '../css/navBarCss.css';

const NavBar = props =>{
    const {postHttpRequest} = useHttp();
    const navigate = useNavigate();



    
    const logout = useCallback(async () =>{
        
        console.log("logout");
        
        const configRequest = {
            url: 'logout',
            data: null
        };

        const applyData = res =>{
            window.location.reload(true);
            navigate("/")
        };

        await postHttpRequest(configRequest, applyData);
    },[])

    return(
        <React.Fragment>
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-light bg-nav container-fluid">
                    <div className ="container-fluid">
                        <Link to="/dashboard" className="navbar-brand text-light">Choose Game</Link>
                        <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className ="navbar-toggler-icon"></span>
                        </button>
                        <div className ="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className ="nav-item">
                                <Link className ="nav-link active text-capitalize text-light" 
                                        to={"/jeopardy/dashboard"} aria-current="page">
                                            jeopardy
                                </Link>
                            </li>
                            <li className="nav-item dropdown text-center">
                                <Link className="nav-link dropdown-toggle text-light" 
                                        to={''} id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                >Talk Track
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item text-center" 
                                                to={'/talktrack/questions'}
                                        >Questions</Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" 
                                                to={''}
                                        >TalkTracks
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <AddUser/>
                            <li className="nav-item">
                                <a className="nav-link text-light"
                                    href="mailto:yeoman@yeomanswork.net?subject=Bug Report!"
                                >Report Bug</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-light"
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
        </React.Fragment>
        
    )
}

export default NavBar