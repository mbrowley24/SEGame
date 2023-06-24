import React, {useCallback, useEffect, useMemo, useContext} from "react";
import NavBar from "./NavBar";
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import PlayersPanel from "./PlayersPanel";
import {gameActions} from "../store/gameData";
import {qAndAActions} from "../store/questionAndAnswerData";
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
    const players = useMemo(() => game.players.length > 1, [game.players]);
    const fullGame = useMemo(() => game.players.length > 19, [game.players]);
    const host = useMemo(() => hostJoined(game.host) , [game.host]);
    const isHost = useMemo(() => game.host.username === myData.username, [host, myData]);

    useEffect(()=>{

        socket.on('player', data => {
            console.log(data);
            dispatch(gameActions.setPlayers(data));
        });

        socket.on('host', data =>{

            dispatch(gameActions.setHost(data.host));
        });


        if(game.host.username === myData.username) {

            console.log(game.host.username);

            socket.on('new_participant', () => {

                socket.emit('update_participants', {room: id, game: game});
            });

        }else{

            socket.on('host_update', data => {

                dispatch(gameActions.setGame(data));
            });

            socket.on('question', data => {

                console.log(data);
                dispatch(qAndAActions.setQAndA(data));
            });
        }

    }, [socket]);



    const addNewPlayer = useCallback((e) => {

        console.log(game.players)
        const newPlayer = addPlayer(myData);

        dispatch(gameActions.setPlayers(newPlayer));
        socket.emit('add_player', {room:id, players:newPlayer});
    },[]);


    console.log(game);


    return(
        <div className={'container'}>
            <NavBar/>
            <div className={'d-flex w-100 py-3'}>
                <div className={'w-25  m-auto height600px me-2 border'}>
                    <h4 className={'text-capitalize'}>host: {game.host.name}</h4>
                    {!fullGame && !isHost && <button
                        className={'btn btn-link'}
                        onClick={addNewPlayer}
                        disabled={!host}
                    >Join</button>}
                    <h6 className={'text-capitalize'}>players</h6>
                    <PlayersPanel game={game}/>
                </div>
                <div className={'m-auto w-75 ms-2'}>
                    {players && host && <PlayGame data={game} id={id}/>}
                    {!players && host && <h1 className={'text-center'}>Waiting for players to join</h1>}
                    {!host && <h1 className={'text-center'}>Waiting for host to join</h1>}
                </div>
            </div>
        </div>
    )
};
export default GamePlay;