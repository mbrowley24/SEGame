import React, {useCallback, useContext} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FaSadTear} from "react-icons/fa";
import SocketContext from "../context/SocketContext";
import {gameActions} from "../store/gameData";
import {qAndAActions} from "../store/questionAndAnswerData";

const CorrectIncorrect = props => {
    const {id, question} = props;
    const dispatch = useDispatch();
    const {socket} = useContext(SocketContext);
    const buzzedPlayer = useSelector(state => state.gameData.buzzer.player);
    const correctAnswer = useCallback(() => {

        dispatch(gameActions.correctAnswer(question));

        console.log(question);
        socket.emit('correct_answer', {room: id, question: question});
        dispatch(qAndAActions.resetQAndA());


    }, []);

    const incorrectAnswer = useCallback(() => {

        dispatch(qAndAActions.attemptedBy(buzzedPlayer));
        dispatch(gameActions.incorrectAnswer(question));
        socket.emit('incorrect_answer', {room: id, question: question, player: buzzedPlayer});

    }, []);

    const notAttempted = useCallback(() => {

            socket.emit('not_attempted', {room: id, question: question});
            dispatch(gameActions.notAttempted(question));
            dispatch(qAndAActions.resetQAndA());


    },[])

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
                onClick={incorrectAnswer}
            >
                incorrect
            </button>
            <button  className={'btn btn-warning text-capitalize ms-2'}
                onClick={notAttempted}
            >
                <FaSadTear/> attempted
            </button>
        </React.Fragment>
    )
};

export default CorrectIncorrect;