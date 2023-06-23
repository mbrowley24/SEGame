import React, {useCallback, useEffect, useMemo, useContext} from "react";
import NavBar from "./NavBar";
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import PlayersPanel from "./PlayersPanel";
import {gameActions} from "../store/gameData";
import PlayGame from "./PlayGame";
import useGame from "../hooks/useGame";
import '../css/generalCss.css'
import SocketContext from "../context/SocketContext";

const GamePlay = props => {


    const {id} = useParams();
    const dispatch = useDispatch();
    const {socket} = useContext(SocketContext);
    const {hasPlayers, playerFull, addPlayer, hostJoined} = useGame();
    const game = useSelector(state => state.gameData);
    const myData = useSelector(state => state.playerData);
    const players = useMemo(() => hasPlayers(game.players), [game.players]);
    const fullGame = useMemo(() => playerFull(game.players), [game.players]);
    const host = useMemo(() => hostJoined(game.host) , [game.host]);

    useEffect(()=>{
        socket.on('player', data => {
            dispatch(gameActions.setPlayers(data));
        });

        socket.on('host', data=>{
            dispatch(gameActions.setHost(data));
        } );

        if(host){

            if(game.host.username === myData.username) {
                socket.on('new_participant', () => {

                    socket.emit('update_participants', {room: id, game: game});
                });

            }else{

                socket.on('host_update', data => {
                    dispatch(gameActions.setGame(data));
                });
            }
        }

    }, [socket]);



    const addNewPlayer = useCallback((e) => {

        const newPlayer = addPlayer(game, myData);
        dispatch(gameActions.setPlayers(newPlayer));
        socket.emit('add_player', {room:id, players:newPlayer});
    },[]);




    return(
        <div className={'container'}>
            <NavBar/>
            <div className={'d-flex w-100 py-3'}>
                <div className={'w-25  m-auto height600px me-2 border'}>
                    {!fullGame && <button
                        className={'btn btn-link'}
                        onClick={addNewPlayer}
                        disabled={!host}
                    >Join</button>}
                    <h4 className={'text-capitalize'}>players</h4>
                    <PlayersPanel game={game}/>

                </div>
                <div className={'m-auto w-75 ms-2'}>
                    {players && host && <PlayGame data={game}/>}
                    {!players && host && <h1 className={'text-center'}>Waiting for players to join</h1>}
                    {!host && <h1 className={'text-center'}>Waiting for host to join</h1>}
                </div>
            </div>
        </div>
    )
};
export default GamePlay;