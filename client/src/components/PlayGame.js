import React, {useContext, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import ActiveGameBoard from "./ActiveGameBoard";
import ActiveQuestion from "./ActiveQuestion";
import SocketContext from "../context/SocketContext";
import {qAndAActions} from "../store/questionAndAnswerData";
import {gameActions} from "../store/gameData";

const PlayGame = props => {
    const {data, id} = props;
    const dispatch = useDispatch();
    const attempt  = useSelector(state => state.qAndAData.attempt);
    const {socket} = useContext(SocketContext);

    useEffect(() => {

        socket.on('question', data => {
            dispatch(qAndAActions.setQAndA(data));
        });

        socket.on("correct_answer_update", (data) => {

            dispatch(gameActions.correctAnswer(data));
            dispatch(qAndAActions.resetQAndA());
        });



        return () => {};
    }, [socket]);

    return(
        <React.Fragment>
            {!attempt && <ActiveGameBoard data={data} id={id}/>}
            {attempt && <ActiveQuestion  id={id}/>}
        </React.Fragment>
    )
};
export default PlayGame;