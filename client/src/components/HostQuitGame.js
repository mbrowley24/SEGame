import React, {useContext, useCallback, useState} from "react";
import "../css/generalCss.css"
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import SocketContext from "../context/SocketContext";
import {Modal} from "react-bootstrap";
import {gameActions} from "../store/gameData";
import {qAndAActions} from "../store/questionAndAnswerData";


const HostPanelPopOut = props => {
    const {game} = props;
    const navigate = useNavigate();
    const {socket} = useContext(SocketContext)
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const endGame = useCallback(() => {

        socket.emit('end_game', {room: game.room});
        handleClose();
        dispatch(qAndAActions.resetQAndA());
        dispatch(gameActions.resetGame());
        navigate('/jeopardy/dashboard')

    },[]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <React.Fragment>
            <Modal show={show}
                    onHide={handleClose}
                    backdrop="static"
                    className="bg-dark"
                    
                    >
                <Modal.Header closeButton>
                    <Modal.Title>Quite Current Game</Modal.Title>
                </Modal.Header>
                <Modal.Body>Quit Current Game?</Modal.Body>
                <Modal.Footer>
                    <button className={'btn btn-secondary'} onClick={handleClose}>
                        Cancel
                    </button>
                    <button className={'btn btn-danger'} onClick={endGame}>
                        quit
                    </button>
                </Modal.Footer>
            </Modal>
            
            <button
                className={'btn button-background fw-bold text-size-0 text-light text-capitalize text-center'}
                onClick={()=>handleShow()}
            >
                end game
            </button>
        </React.Fragment>

    )
};

export default HostPanelPopOut;