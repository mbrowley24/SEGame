import React, {useContext, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import SocketContext from "../context/SocketContext";
import {gameActions} from "../store/gameData";
import {playerActions} from "../store/playerData";
import {useNavigate} from "react-router-dom";
import PlayerPanelList from "./PlayerPanelList";

const PlayersPanel = props => {
    const {game, id} = props;

    const dispatch = useDispatch();
    const {socket} = useContext(SocketContext);
    const navigate = useNavigate();
    const myData = useSelector(state => state.playerData);


    return(
        <PlayerPanelList game={game} id={id} socket={socket} myData={myData}/>
    )
};
export default PlayersPanel;