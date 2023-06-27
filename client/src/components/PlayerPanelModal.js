import React from "react";
import {Modal, Button} from "react-bootstrap";



const PlayerPanelModal = props => {
    const {show, handleClose, player} = props;



    return(
        <React.Fragment>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{`Boot ${player.name} from game`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to boot {player.name} from the game?</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className={'btn btn-primary'}>Kick</button>
                    <button className={'btn btn-primary'}>Kick</button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>

    )
}

export default PlayerPanelModal;