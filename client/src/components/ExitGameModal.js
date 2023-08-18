import React, {useContext} from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import {useDispatch} from "react-redux";
import SocketContext from "../context/SocketContext";
import {useNavigate} from "react-router-dom";
import {gameActions} from "../store/gameData";

const ExitGameModal = props => {
    const {show, handleClose, id} = props;
    const {socket} = useContext(SocketContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const exitGame = () => {

        dispatch(gameActions.resetGame());
        socket.emit('exit_game', id);
        navigate('/dashboard');
        handleClose();
    };


    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Exit game</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to exit game?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    cancel
                </Button>
                <Button variant="danger" onClick={exitGame}>
                    exit
                </Button>
            </Modal.Footer>
        </Modal>
    )
};
export default ExitGameModal;