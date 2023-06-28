import React, {useEffect, useMemo, useContext, useState} from "react";
import NavBar from "./NavBar";
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import PlayersPanel from "./PlayersPanel";
import {gameActions} from "../store/gameData";
import PlayGame from "./PlayGame";
import useGame from "../hooks/useGame";
import '../css/generalCss.css'
import SocketContext from "../context/SocketContext";
import GamePlayHostPanel from "./GamePlayHostPanel";

const GamePlay = props => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const [viewLobby, setViewLobby] = useState(false);
    const {socket} = useContext(SocketContext);
    const {hostJoined} = useGame();
    const game = useSelector(state => state.gameData);
    const myData = useSelector(state => state.playerData);
    const players = useMemo(() => game.players.length > 1, [game.players]);
    const host = useMemo(() => hostJoined(game.host) , [game.host]);
    const isHost = useMemo(() => game.host.username === myData.username, [host, myData]);

    const showLobby = () => setViewLobby(true);
    const hideLobby = () => setViewLobby(false);

    useEffect(()=>{

        socket.on('player', data => {

            dispatch(gameActions.setPlayers(data));

        });

        socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err}`);
        })

        socket.on('host', data =>{
            console.log(data);
            dispatch(gameActions.setGame(data));

            socket.emit('join_game', {room:id, player:myData});
        });


        socket.on('host_update', data => {

                dispatch(gameActions.setGame(data));

        });


    }, [socket]);

    return(
        <div className={'container'}>
            <NavBar/>
            <div className={'d-flex w-100 py-3 border justify-content-center bg-primary p-1'}>
                <div className={`w-25 m-auto height600px p-1 me-2 border border-dark overflow-auto 
                    rounded-2 align-self-start background-Lapis-lazuli`}
                >
                    <h4 className={'text-capitalize'}>host: {game.host.name}</h4>

                    {!isHost && <h6 className={'text-capitalize '}>players</h6>}
                    {!isHost && <PlayersPanel game={game}/>}
                    { isHost && <GamePlayHostPanel show={showLobby}
                                                   hide={hideLobby}
                                                   viewLobby={viewLobby}
                                                   id={id}
                                                   game={game}/>}


                </div>
                <div className={'m-auto w-75 ms-2'}>
                    {players && host && <PlayGame data={game} id={id}/>}
                    {!players && host && <h1 className={'text-center'}>Waiting for players to join</h1>}

                </div>
            </div>
        </div>
    )
};
export default GamePlay;