import React, {useState, useContext, useEffect, useMemo} from "react";
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
    const [show, setShow] = useState(false);
    const {socket} = useContext(SocketContext);
    const question = useSelector(state => state.qAndAData);
    const game = useSelector(state => state.gameData);
    const myData = useSelector(state => state.playerData);
    const isHost = useMemo(() => game.host.username === myData.username, [game.host, myData]);
    const timer = useMemo(() => game.buzzer.buzz, [game.buzzer.buzz]);
    const showAnswer = useSelector(state => state.qAndAData.showAnswer);

    useEffect(() => {

        socket.on("buzzed", data => {

            dispatch(gameActions.setBuzzer(data));
        });

        socket.on("show_answer_update", (data) => {
            console.log("show_answer_update");

            dispatch(qAndAActions.showAnswer());
        });

        socket.on("hide_answer_update", () => {
            console.log("hide_answer_update");

            dispatch(qAndAActions.hideAnswer());
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

    useEffect(() => {}, [showAnswer]);

    return(
        <div className={'p-2 border-1 border-dark height600px bg-primary'}>
            { !showAnswer &&
                <div
                    className={`d-flex justify-content-center bg-primary
                        height300Px border-3 rounded-1 border-dark`}
                >
                    <div className={'p-1 text-md-center align-self-center'}>
                        <h1 className={'text-warning'}>{question.question}</h1>
                    </div>
                </div>
                }
            {
                showAnswer &&
                    <div
                      className={`d-flex justify-content-center bg-primary height300Px border-3 rounded-1 border-dark`}
                    >
                        <div className={'p-1 text-md-center align-self-center'}>
                            <h1 className={'text-warning'}>{question.answer}</h1>
                        </div>
                    </div>
            }
            <div className={'p-5 m-5'}>
                {!timer && <Buzzer/>}
                {timer && <Counter/>}
            </div>
        </div>

    )


};

export default ActiveQuestion;