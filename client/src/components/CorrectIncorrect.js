import React, {useCallback, useContext, useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FaSadTear} from "react-icons/fa";
import SocketContext from "../context/SocketContext";
import {gameActions} from "../store/gameData";
import {qAndAActions} from "../store/questionAndAnswerData";

const CorrectIncorrect = props => {
    const {question} = props;
    const dispatch = useDispatch();
    const {socket} = useContext(SocketContext);
    const buzzedPlayer = useSelector(state => state.gameData.buzzer.player);
    const game = useSelector(state => state.gameData);
    const showAnswerHandler = useCallback(async () => {

        // console.log(showAnswer)
        // console.log(qAndAData);
        // console.log(qAndAData.showAnswer);
        console.log(question);


        if(question.showAnswer){
            console.log("hide_answer");
            dispatch(qAndAActions.hideAnswer());
            socket.emit('hide_answer', {room: game.room});

        }else{
            console.log("show_answer");
            dispatch(qAndAActions.showAnswer());
            socket.emit('show_answer', {room: game.room});

        }

    }, [question]);

    const correctAnswer = useCallback(() => {

        dispatch(gameActions.correctAnswer(question));
        socket.emit('correct_answer', {room: game.room, question: question});
        dispatch(qAndAActions.resetQAndA());

    }, []);

    const incorrectAnswer = useCallback(() => {

        dispatch(qAndAActions.attemptedBy(buzzedPlayer));
        dispatch(gameActions.incorrectAnswer(question));
        socket.emit('incorrect_answer', {room: game.room, question: question, player: buzzedPlayer});

    }, []);

    const notAttempted = useCallback(() => {

            socket.emit('not_attempted', {room: game.room, question: question});
            dispatch(gameActions.notAttempted(question));
            dispatch(qAndAActions.resetQAndA());


    },[])

    // useEffect(() => {
    //     socket.emit('show_answer', {room: game.room, show: showAnswer});
    // },[showAnswer])

    return(
        <React.Fragment>
            <button
                className={'btn btn-primary me-2 text-capitalize'}
                onClick={showAnswerHandler}
                >
                {question.showAnswer? 'hide answer' :'show answer'}
            </button>
            <button
                className={'btn btn-success me-2 text-capitalize'}
                onClick={correctAnswer}
                disabled={buzzedPlayer.length === 0}
            >
                correct
            </button>
            <button
                className={'btn btn-danger text-capitalize ms-2'}
                onClick={incorrectAnswer}
                disabled={buzzedPlayer.length === 0}
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