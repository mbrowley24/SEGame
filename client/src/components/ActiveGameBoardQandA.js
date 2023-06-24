import React, {useContext, useEffect, useMemo} from "react";
import {useDispatch} from "react-redux";
import {qAndAActions} from "../store/questionAndAnswerData";
import SocketContext from "../context/SocketContext";
import useGame from "../hooks/useGame";
import "../css/generalCss.css"

const ActiveGameBoardQandA = props => {

    const {data, value, id} = props;
    const {socket} = useContext(SocketContext);
    const dispatch = useDispatch();
    const {questionAttempted} = useGame();
    const question = useMemo(() => questionAttempted(data, value, id), [data, value, id]);



    const attemptedQuestions = props => {

        console.log(question);

        socket.emit('attempted_question', question);

        dispatch(qAndAActions.setQAndA(question));

    };



    return(
        <div className={'border d-flex height100Px justify-content-center bg-primary'}>
            <h5 className={'align-self-center'}>
                <button className={'btn btn-link text-warning fw-bold'}
                        onClick={attemptedQuestions}

                >
                    {`$${value}`}
                </button>

            </h5>
        </div>
    )
};
export default ActiveGameBoardQandA;