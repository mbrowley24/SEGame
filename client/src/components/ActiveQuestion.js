import React, {useCallback, useContext, useEffect, useMemo} from "react";
import Buzzer from "./Buzzer";
import {useDispatch, useSelector} from "react-redux";
import CorrectIncorrect from "./CorrectIncorrect";
import SocketContext from "../context/SocketContext";
import {useParams} from "react-router-dom";
import "../css/generalCss.css";
import Counter from "./Counter";
import {gameActions} from "../store/gameData";
import {qAndAActions} from "../store/questionAndAnswerData";

const ActiveQuestion = props => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {socket} = useContext(SocketContext);
    const question = useSelector(state => state.qAndAData);
    const game = useSelector(state => state.gameData);
    const myData = useSelector(state => state.playerData);
    const isHost = useMemo(() => game.host.username === myData.username, [game.host, myData]);
    const timer = useMemo(() => game.buzzer.buzz, [game.buzzer.buzz]);

    useEffect(() => {

        socket.on("buzzed", data => {

            dispatch(gameActions.setBuzzer(data));
        });

        socket.on("correct_answer_update", (data) => {

        });

        socket.on("incorrect_answer_update", (data) => {

            dispatch(gameActions.incorrectAnswer(data.question));
            dispatch(qAndAActions.attemptedBy(data.player));
        });

        socket.on('not_attempted_update', data => {
            dispatch(gameActions.notAttempted(data));
            dispatch(qAndAActions.resetQAndA());
        });

    }, [socket]);

    console.log(myData);
    console.log(game.host);

    console.log(game.buzzer.buzz);
    return(
        <div className={'pt-3 border'}>
            <div className={'d-flex height400px justify-content-center border height200Px'}>
                <div className={'p-1 text-md-center align-self-center'}>
                    <h3>{question.question}</h3>
                </div>
            </div>
            {isHost &&  <div className={'height150Px'}>
                {!timer && <CorrectIncorrect id={id} question={question}/>}
                {timer && <Counter/>}
            </div> }
            {!isHost && <div className={'p-5 m-5 border'}>
                {!timer && <Buzzer/>}
                {timer && <Counter/>}
            </div>}
        </div>

    )


};

export default ActiveQuestion;