import React from "react";
import JoinGame from "../components/JoinGame";
import useHttp from "../hooks/useHttp";
import {Link} from "react-router-dom";
import "../css/generalCss.css"
const JoinGameView = props => {
     const {getHttpRequest} = useHttp();

    return(
        <div className={'d-flex justify-content-center height925px'}>
            <div className={'align-self-center'}>
                <h1>Join Game</h1>
                <JoinGame/>
                <div>
                    <Link
                        className={'text-capitalize text-jeopardy-yellow'}
                        to={"/"}
                    >login</Link>
                </div>
            </div>

        </div>
    )
};

export default JoinGameView;