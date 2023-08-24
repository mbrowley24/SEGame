import React, {useContext, useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {qAndAActions} from "../store/questionAndAnswerData";
import SocketContext from "../context/SocketContext";
import useGame from "../hooks/useGame";
import "../css/generalCss.css"

const ActiveGameBoardQandA = props => {

    const {data, value} = props;
    const {socket} = useContext(SocketContext);
    const dispatch = useDispatch();
    const {questionAttempted} = useGame();
    const game = useSelector(state => state.gameData);
    const question = useMemo(() => questionAttempted(data, value, game.room), [data, value, game.room]);
    const player = useSelector(state => state.playerData);
    const isHost = useMemo(() => game.host.username === player.username, [game.host, player]);

    const attemptedQuestions = () => {

        socket.emit('attempted_question', {room : game.room, question : question});

        dispatch(qAndAActions.setQAndA(question));

    };


    return(
        <div className={'border d-flex height15 justify-content-center bg-primary'}
            onMouseEnter={e => e.target.classList.add('border-warning', 'border-4', 'shadow-lg')}
            onMouseLeave={e => e.target.classList.remove('border-warning', 'border-4', 'shadow-lg')}
        >
            <h5 className={'align-self-center'} hidden={data[value].attempted}>

                {
                    isHost ?
                            <button className={'btn text-warning fw-bold game_btn fs-1'}
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