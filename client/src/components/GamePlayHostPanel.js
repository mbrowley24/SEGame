import React, {useEffect, useContext, useMemo} from "react";
import PlayersPanel from "./PlayersPanel";
import LobbyPanel from "./lobbyPanel";
import SocketContext from "../context/SocketContext";
import {gameActions} from "../store/gameData";
import {useDispatch, useSelector} from "react-redux";
import useGame from "../hooks/useGame";



const GamePlayHostPanel = props => {
        const {show, hide, viewLobby, id, game} = props
        const dispatch = useDispatch();
        const {socket} = useContext(SocketContext);

    console.log('game');
        console.log(game);
    useEffect(() => {

        // socket.on('player_update', (data) => {
        //
        //     const count = playerCount + lobbyCount;
        //     //console.log('player_update');
        //     // console.log(count);
        //     // console.log(data.player);
        //
        //     if (count  < 3) {
        //
        //
        //
        //
        //     }else{
        //
        //             console.log('lobby_full');
        //             socket.emit('lobby_full',  data.socket);
        //     }
        //
        //
        // });




        return () => {};

    }, [socket]);


    return(
        <React.Fragment>
            <ul className="nav nav-pills text-center w-75 m-auto">
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
            {!viewLobby &&  <PlayersPanel game={game} id={id} isHost={true}/>}
            {viewLobby && <LobbyPanel show={viewLobby} id={id} game={game}/>}
        </React.Fragment>

    )
};
export default GamePlayHostPanel;