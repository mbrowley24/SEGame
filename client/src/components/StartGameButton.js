import React, {useContext, useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {gameActions} from "../store/gameData";
import {useNavigate} from "react-router-dom";
import SocketContext from "../context/SocketContext";
import useGame from "../hooks/useGame";
const StartGameButton = props => {
    const {game, id} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {updateHost} = useGame();
    const {socket, setId} = useContext(SocketContext);
    const {name, username} = useSelector(state => state.playerData);

    useLayoutEffect(() => {
        if(id){
            setId(id);
        }
    }, [id]);

    const startGame = () => {

        const gameUpdate = updateHost(game, {name, username});
        console.log(gameUpdate);
        dispatch(gameActions.setGame(gameUpdate));

        socket.emit("join_game_host", {room:id, game: gameUpdate});

        navigate(`/games/${game.id}/game`);
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