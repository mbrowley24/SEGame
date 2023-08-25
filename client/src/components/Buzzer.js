import React, {useContext, useMemo, useCallback, useEffect} from "react";
import SocketContext from "../context/SocketContext";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {gameActions} from "../store/gameData";
import {qAndAActions} from "../store/questionAndAnswerData";

const Buzzer = props => {
    const {id} = useParams();
    const {socket} = useContext(SocketContext);
    const dispatch = useDispatch();
    const game = useSelector(state => state.gameData);
    const question = useSelector(state => state.qAndAData);
    const myData = useSelector(state => state.playerData);
    const buzzed = useMemo(() => game.buzzer.player.length > 0, [game]);
    const attempted = useMemo(() => question.attempted_by.includes(myData.username) , [game, myData]);


    const buzzer = useCallback(() => {

            socket.emit('buzzer', {room: game.room, username: myData.username});

            dispatch(gameActions.setBuzzer(myData.username));

    },[]);


    useEffect(() => {

        socket.on("buzzed", data => {

            dispatch(gameActions.setBuzzer(data));

        });



    }, [socket]);


    return(
        <React.Fragment>
            <button
                className={'bg-success btn-lg py-5 d-block w-100 text-uppercase'}
                disabled={attempted || buzzed}
                onClick={() => buzzer()}
            >buzzer</button>
        </React.Fragment>
    )
};
export default Buzzer;