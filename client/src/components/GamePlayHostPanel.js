import React, {useEffect, useContext} from "react";
import PlayersPanel from "./PlayersPanel";
import LobbyPanel from "./lobbyPanel";
import SocketContext from "../context/SocketContext";
import {gameActions} from "../store/gameData";
import {useDispatch} from "react-redux";



const GamePlayHostPanel = props => {
        const {show, hide, game, viewLobby, id} = props
        const dispatch = useDispatch();
        const {socket} = useContext(SocketContext);


    useEffect(() => {

        socket.on('lobby', data => {
            console.log(data);
            console.log("lobby");
            dispatch(gameActions.addLobby(data));

        });

        return () => {};
    }, [socket]);


    return(
        <React.Fragment>
            <ul className="nav nav-pills text-center m-auto">
                <li className="nav-item">
                    <button className={!viewLobby?'btn btn-link text-warning bg-dark' : 'btn btn-link text-warning'}
                            onClick={hide}
                    >
                        <h6 className={'text-capitalize '}>players{`(${game.players.length})`}</h6>
                    </button>
                </li>
                <li className="nav-item">
                    <button className={viewLobby?'btn btn-link text-warning bg-dark' : 'btn btn-link text-warning'}
                            onClick={show}
                    >
                        <h6 className={'text-capitalize'}>lobby{`(${game.lobby.length})`}</h6>
                    </button>
                </li>
            </ul>
            {!viewLobby &&  <PlayersPanel game={game}/>}
            <LobbyPanel show={viewLobby} id={id} game={game}/>
        </React.Fragment>

    )
};
export default GamePlayHostPanel;