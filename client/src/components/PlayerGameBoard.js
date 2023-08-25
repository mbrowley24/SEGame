import React, {useContext, useEffect ,useMemo} from "react";
import ActiveGameBoard from "./ActiveGameBoard";
import {useSelector, useDispatch} from "react-redux";
import ActiveQuestion from "./ActiveQuestion";
import SocketContext from "../context/SocketContext";
import {useNavigate} from "react-router-dom";
import {playerActions} from "../store/playerData";
import {qAndAActions} from "../store/questionAndAnswerData";
import {gameActions} from "../store/gameData";

const PlayerGameBoard = props => {
    const dispatch = useDispatch();
    const {socket, setId} = useContext(SocketContext);
    const navigate = useNavigate();
    const questions  = useSelector(state => state.qAndAData);
    const attempt = useMemo(() => questions.attempt, [questions.attempt]);
    const game = useSelector(state => state.gameData);

    useEffect(() => {
        socket.on("exit_game_update", () => {
            console.log("exit_game_update event received on client side");
            setId('');
            dispatch(playerActions.resetData());
            dispatch(qAndAActions.resetQAndA());
            dispatch(gameActions.resetGame());
            socket.disconnect();
            navigate("/join");

        });
    },[socket])

    return(
        <React.Fragment>
            {!attempt && <ActiveGameBoard data={game} id={game.room}/>}
            {attempt && <ActiveQuestion/>}
        </React.Fragment>
    )
};
export default PlayerGameBoard;