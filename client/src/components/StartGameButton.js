import React, {useContext, useEffect, useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {gameActions} from "../store/gameData";
import {useNavigate} from "react-router-dom";
import SocketContext from "../context/SocketContext";
import useGame from "../hooks/useGame";
const StartGameButton = props => {
    const {game} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {updateHost} = useGame();
    const {socket, setId, id} = useContext(SocketContext);
    const {name, username} = useSelector(state => state.playerData);


    useEffect(() => {
        setId(game.room);
    }, [game]);

    const startGame = () => {

        const gameUpdate = updateHost(game, {name, username});

        dispatch(gameActions.setGame({game:gameUpdate}));

        socket.emit("game_host", {room:gameUpdate.room, game: gameUpdate});
                navigate(`/jeopardy/games/${game.id}/game`);
    };


    return(
        <button className={'btn button-jeopardy-orange text-capitalize'}
            onClick={()=>startGame()}
        >
            Start Game
        </button>
    )
};
export default StartGameButton;