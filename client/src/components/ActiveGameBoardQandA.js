import React, {useContext, useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
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
    const host = useSelector(state => state.gameData.host);
    const player = useSelector(state => state.playerData);
    const isHost = useMemo(() => host.username === player.username, [host, player]);



    const attemptedQuestions = props => {

        console.log(question);

        socket.emit('attempted_question', question);

        dispatch(qAndAActions.setQAndA(question));

    };



    return(
        <div className={'border d-flex height150Px justify-content-center bg-primary'}
            onMouseEnter={e => e.target.classList.add('border-warning', 'border-4', 'shadow-lg')}
            onMouseLeave={e => e.target.classList.remove('border-warning', 'border-4', 'shadow-lg')}
        >
            <h5 className={'align-self-center'} hidden={data[value].attempted}>

                {
                    isHost ?
                            <button className={'btn btn-link text-warning fw-bold'}
                                    onClick={attemptedQuestions}
                            >
                                {`$${value}`}
                            </button>
                        :

                        <span className={'text-warning'}>${value}</span>

                }


            </h5>
        </div>
    )
};
export default ActiveGameBoardQandA;