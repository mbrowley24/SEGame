import React, {useContext, useEffect, useMemo, useState} from "react";
import PlayGame from "./PlayGame";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import SocketContext from "../context/SocketContext";
import {gameActions} from "../store/gameData";
import useGame from "../hooks/useGame";
import {qAndAActions} from "../store/questionAndAnswerData";
import PlayerGameBoard from "./PlayerGameBoard";
const PlayerGame = props => {
    const {id} = useParams();
    const [update, setUpdate] = useState(false);
    const {socket, setId} = useContext(SocketContext);
    const dispatch = useDispatch();
    const {playerInGame} = useGame();
    const myData = useSelector(state => state.playerData);
    const game = useSelector(state => state.gameData);
    const inGame = useMemo(() => playerInGame(game.players, myData), [game.players]);

    useEffect(() => {
        setId(id);
        return () => {};
    }, [id]);


    useEffect(() => {

        socket.on('question', data => {
            console.log(data);
            dispatch(qAndAActions.setQAndA(data));
        });

        socket.on('update', data => {

            dispatch(gameActions.setGame(data));

        });

        socket.on('buzzed', data => {
            console.log(data);
            dispatch(gameActions.setBuzzer(data));
        });

        socket.on('correct_answer_update', data => {
            console.log("show_answer_update");
            console.log(data);
            dispatch(gameActions.correctAnswer(data));
            dispatch(qAndAActions.resetQAndA());
        });

        return () => {};

    }, [socket]);

    useEffect(() => {

        if(!inGame){

            setTimeout(() => {
                console.log("join game");
                console.log(id);
                socket.emit('join_game', {room: id, player:myData});

                setUpdate(!update);
            }, 5000);


        }

        return () => {}
    }, [update, inGame]);


    return(
        <div className={'page_container py-4'}>
            <h2 className={'text-capitalize'}>Host: {game.host.name}</h2>
            <div className={'p-4'}>
                {inGame && <PlayerGameBoard/>}
                {!inGame && <h1 className={'text-capitalize'}>waiting in lobby</h1>}
            </div>
        </div>
    )
};
export default PlayerGame;