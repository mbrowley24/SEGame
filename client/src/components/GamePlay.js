import React, {useEffect, useMemo, useContext, useState} from "react";
import NavBar from "./NavBar";
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {gameActions} from "../store/gameData";
import PlayGame from "./PlayGame";
import '../css/generalCss.css'
import SocketContext from "../context/SocketContext";
import HostPanelPopOut from "./HostPanelPopOut";
const GamePlay = props => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {socket} = useContext(SocketContext);
    const game = useSelector(state => state.gameData);
    const players = useMemo(() => game.players.length > 1, [game.players]);


    useEffect(()=>{

        socket.on('lobby', (data) => {
            console.log("lobby");
            console.log(data);
            dispatch(gameActions.addLobby(data));

        });

    }, [socket]);

    return(
        <div className={'page_container'}>
            <NavBar/>
            <div className={'d-flex w-100 px-3 py-4 m-auto'}>
                <HostPanelPopOut id={id} game={game}/>
                <div className={'m-auto w-100 d-flex justify-content-center px-3'}>
                    <PlayGame data={game} id={id}/>
                </div>
            </div>
        </div>
    )
};
export default GamePlay;