import React, {useEffect, useContext, useState} from "react";

import LobbyPanel from "./lobbyPanel";
import SocketContext from "../context/SocketContext";
import ExitGameModal from "./ExitGameModal";
import GamePlayHostPanelButtons from "./GamePlayHostPanelButtons";



const GamePlayHostPanel = props => {
        const {id, game, show} = props
        const {socket} = useContext(SocketContext);


    useEffect(() => {


        return () => {};

    }, [socket]);


    return(
        <React.Fragment>
            <LobbyPanel show={show} id={id} game={game}/>
        </React.Fragment>

    )
};
export default GamePlayHostPanel;