import React, {useCallback, useContext, useEffect, useMemo} from "react";
import Buzzer from "./Buzzer";
import {useDispatch, useSelector} from "react-redux";
import CorrectIncorrect from "./CorrectIncorrect";
import SocketContext from "../context/SocketContext";
import {useParams} from "react-router-dom";
import "../css/generalCss.css";

const ActiveQuestion = props => {

    const {id} = useParams();
    const {socket} = useContext(SocketContext);
    const question = useSelector(state => state.qAndAData);
    const game = useSelector(state => state.gameData);
    const myData = useSelector(state => state.playerData);
    const isHost = useMemo(() => game.host.username === myData.username, [game.host, myData]);


    useEffect(() => {

        socket.on("buzzer", data => {
            console.log(data);
        });

    }, [socket]);

    console.log(question);

    return(
        <div className={'pt-3 border'}>
            <div className={'d-flex height400px justify-content-center border height200Px'}>
                <div className={'p-1 text-md-center align-self-center'}>
                    <h3>{question.question}</h3>
                </div>
            </div>
            <div className={'height150Px'} hidden={!isHost}>
                <CorrectIncorrect id={id} question={question}/>
            </div>
            <div className={'p-5 m-5 border'} hidden={isHost}>
                <Buzzer/>
            </div>
        </div>

    )


};

export default ActiveQuestion;