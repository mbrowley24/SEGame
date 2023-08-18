import React, {useEffect, useContext, useMemo, useState} from "react";
import PlayersPanel from "./PlayersPanel";
import LobbyPanel from "./lobbyPanel";
import SocketContext from "../context/SocketContext";
import {gameActions} from "../store/gameData";
import {useDispatch, useSelector} from "react-redux";
import useGame from "../hooks/useGame";
import ExitGameModal from "./ExitGameModal";



const GamePlayHostPanel = props => {
        const {show, hide, viewLobby, id, game} = props
        const [showModal, setShowModal] = useState(false);
        const lobby = useMemo(() => game.lobby.length > 0, [game.lobby]);
        const {socket} = useContext(SocketContext);
        const showModalSwitch = () => setShowModal(true);
        const hideModalSwitch = () => setShowModal(false);

    useEffect(() => {


        return () => {};

    }, [socket]);


    return(
        <React.Fragment>
            <ul className="nav nav-pills text-center w-75 m-auto">
                <li className="nav-item">
                    <button className={!viewLobby?'btn btn-sm btn-link text-warning bg-dark' : 'btn btn-sm btn-link text-warning'}
                            onClick={hide}
                    >
                        <p className={'text-capitalize '}>players{`(${game.players.length})`}</p>
                    </button>
                </li>
                <li className="nav-item w-25">
                    <button className={viewLobby?'btn btn-sm btn-link text-warning bg-dark' : 'btn btn-sm btn-link text-warning'}
                            onClick={show}
                    >
                        <p className={'text-capitalize'}>lobby{`(${game.lobby.length})`}</p>
                    </button>
                </li>
                <li className="nav-item">
                    <button className={'btn btn-sm btn-link text-light bg-danger fw-bolder height40px'}
                            onClick={showModalSwitch}
                    >
                        End Game
                    </button>
                </li>
            </ul>
            <ExitGameModal show={showModal} handleClose={hideModalSwitch} id={id}/>
            {!viewLobby &&  <PlayersPanel game={game} id={id} isHost={true}/>}
            {viewLobby && <LobbyPanel show={viewLobby} id={id} game={game}/>}
        </React.Fragment>

    )
};
export default GamePlayHostPanel;