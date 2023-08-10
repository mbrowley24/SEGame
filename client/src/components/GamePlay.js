import React, {useEffect, useMemo, useContext, useState} from "react";
import NavBar from "./NavBar";
import {useParams, useNavigate} from "react-router-dom";
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
    const navigate = useNavigate();
    const [viewLobby, setViewLobby] = useState(false);
    const [checkin, setCheckin] = useState(false);
    const {socket} = useContext(SocketContext);
    const {hostJoined, isHostCheck} = useGame();
    const game = useSelector(state => state.gameData);
    const myData = useSelector(state => state.playerData);
    const players = useMemo(() => game.players.length > 1, [game.players]);
    const host = useMemo(() => hostJoined(game.host) , [game.host]);
    const isHost = useMemo(() => isHostCheck(game.host.username,myData.username), [host, myData]);

    const showLobby = () => setViewLobby(true);
    const hideLobby = () => setViewLobby(false);

    useEffect(()=>{

        socket.on('player', data => {

            dispatch(gameActions.setPlayers(data));

        });

        socket.on("remove_player_update", data => {
            console.log('remove_player_update');
            dispatch(gameActions.removePlayer(data));
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


    useEffect(() => {

        if(myData.username.length === 0){
            navigate('/')
        }

        if(game.host.username !== ""){
            return
        }

        if(game.lobby.length === 0){
            return
        }

        const timer = setTimeout(() => {
            socket.emit('join_game', {room:id, player:myData});
        }, 1000);

        if(checkin){
            setCheckin(false)
        }else{
            setCheckin(true);
        }

        console.log('checkin', checkin);


        return () => clearTimeout(timer);

    }, [checkin, myData, id]);

    return(
        <div className={'container-fluid height700Px'}>
            <NavBar/>
            <div className={'d-flex w-100 py-3 border justify-content-start bg-primary'}>
                <div className={`w-15 m-auto height800px p-1 me-2 border border-dark overflow-auto 
                    rounded-2 align-self-start background-Lapis-lazuli`}
                >
                    <h6 className={'text-capitalize'}>host: {game.host.name}</h6>


                    {!isHost && <PlayersPanel game={game}/>}
                    { isHost && <GamePlayHostPanel show={showLobby}
                                                   hide={hideLobby}
                                                   viewLobby={viewLobby}
                                                   id={id}
                                                   game={game}/>}


                </div>
                <div className={'m-auto w-75 ms-2 height800px'}>
                    {players && host && <PlayGame data={game} id={id}/>}
                    {!players && host && <h1 className={'text-center'}>Waiting for players to join</h1>}
                    {!players && !host && <h1 className={'text-center'}>Waiting for host</h1>}
                </div>
            </div>
        </div>
    )
};
export default GamePlay;