import React, {useContext, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import SocketContext from "../context/SocketContext";
import {gameActions} from "../store/gameData";
import {playerActions} from "../store/playerData";
import {useNavigate} from "react-router-dom";
import PlayerPanelList from "./PlayerPanelList";

const PlayersPanel = props => {
    const {game, id, isHost} = props;

    const dispatch = useDispatch();
    const {socket} = useContext(SocketContext);
    const navigate = useNavigate();
    const myData = useSelector(state => state.playerData);



    useEffect(()=>{

        socket.on("my_update", (data) => {

            console.log('my_update');
            dispatch(playerActions.setSocketId(data));
        });

        socket.on("lobby_full_update", () => {
            console.log('lobby_full__update');
            dispatch(gameActions.gameFull());
            navigate('/join')
        })



    },[socket]);





    return(
        <PlayerPanelList game={game} id={id} socket={socket} myData={myData} isHost={isHost}/>
    )
};
export default PlayersPanel;