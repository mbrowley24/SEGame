import React, {useState} from "react";
import ExitGameModal from "./ExitGameModal";


const GamePlayHostPanelButtons = props => {
    const {setViewLobby, viewLobby, show, game, id} = props;
    const [showModal, setShowModal] = useState(false);
    const showModalSwitch = () => setShowModal(true);
    const hideModalSwitch = () => setShowModal(false);
    return(
        <React.Fragment>
            <button className={viewLobby?'btn btn-sm btn-link text-warning bg-dark' : 'btn btn-sm btn-link text-warning'}
                    onClick={show}
            >
                <p className={'text-capitalize'}>lobby{`(${game.lobby.length})`}</p>
            </button>
            <br/>
            {/*<button className={'btn btn-sm btn-link text-danger fw-bolder'}*/}
            {/*        onClick={showModalSwitch}*/}
            {/*>*/}
            {/*    End Game*/}
            {/*</button>*/}
            {/*<ExitGameModal show={showModal} handleClose={hideModalSwitch} id={id}/>*/}
        </React.Fragment>
    )
};
export default GamePlayHostPanelButtons;