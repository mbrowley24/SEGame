import React, {useCallback, useContext} from "react";
import {IconContext} from "react-icons";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";
import SocketContext from "../context/SocketContext";
import {gameActions} from "../store/gameData";
import {qAndAActions} from "../store/questionAndAnswerData";

const CorrectIncorrect = props => {
    const {id, question} = props;
    const dispatch = useDispatch();
    const {socket} = useContext(SocketContext);

    const correctAnswer = useCallback(() => {

        dispatch(gameActions.correctAnswer(question));

        console.log(question);
        socket.emit('correct_answer', {room: id, question: question});
        dispatch(qAndAActions.resetQAndA());


    }, []);

    const incorrectAnswer = useCallback(() => {

        dispatch(qAndAActions.resetQAndA());
        dispatch(gameActions.incorrectAnswer(question));

    }, []);

    return(
        <React.Fragment>
            <button
                className={'btn btn-success me-2 text-capitalize'}
                onClick={correctAnswer}
            >
                correct
            </button>
            <button
                className={'btn btn-danger text-capitalize ms-2'}
                onClick={() => incorrectAnswer()}
            >
                incorrect
            </button>
        </React.Fragment>
    )
};

export default CorrectIncorrect;