import React, {useCallback, useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FaSadTear} from "react-icons/fa";
import SocketContext from "../context/SocketContext";
import {gameActions} from "../store/gameData";
import {qAndAActions} from "../store/questionAndAnswerData";

const CorrectIncorrect = props => {
    const {id, question} = props;
    const showAnswer = useSelector(state => state.qAndAData.showAnswer);
    const dispatch = useDispatch();
    const {socket} = useContext(SocketContext);
    const buzzedPlayer = useSelector(state => state.gameData.buzzer.player);
    console.log(buzzedPlayer);

    const showAnswerHandler = useCallback(() => {

        console.log(showAnswer);

        dispatch(qAndAActions.hostShowAnswer(showAnswer));


    }, []);

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

    useEffect(() => {
        socket.emit('show_answer', {room: id, show: showAnswer});
    },[showAnswer])

    return(
        <React.Fragment>
            <button
                className={'btn btn-primary me-2 text-capitalize'}
                onClick={showAnswerHandler}
            >
                show answer
            </button>
            <button
                className={'btn btn-success me-2 text-capitalize'}
                onClick={correctAnswer}
                disabled={!showAnswer && buzzedPlayer.length === 0}
            >
                correct
            </button>
            <button
                className={'btn btn-danger text-capitalize ms-2'}
                onClick={incorrectAnswer}
                disabled={!showAnswer && buzzedPlayer.length === 0}
            >
                incorrect
            </button>
            <button  className={'btn btn-dark text-capitalize ms-2'}
                onClick={notAttempted}

            >
                <FaSadTear/> not answered
            </button>
        </React.Fragment>
    )
};

export default CorrectIncorrect;