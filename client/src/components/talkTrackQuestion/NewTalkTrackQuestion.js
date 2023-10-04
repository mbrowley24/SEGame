import React, {useCallback, useEffect, useReducer} from "react";
import NavBar from "../NavBar";
import TalkTrackQuestionForm from "./TalkTrackQuestionForm";
import useTalkTrack from "../../hooks/useTalkTrack";
import Modal from 'react-bootstrap/Modal';

const NewTalkTrackQuestion = props => {
    const {show, handleClose} = props;
    const {QUESTION_FIELDS, question, talkTrackQuestionReducer} = useTalkTrack();
    const [state, dispatch] = useReducer(talkTrackQuestionReducer, question);

    const inputChange = useCallback((e) => {
        const {value, name} = e.target;
        dispatch({type: name, payload: value});

    },[]);


    const submit = (e) => {
        e.preventDefault();

    };

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body><TalkTrackQuestionForm/></Modal.Body>
            <Modal.Footer>
                <button className="" onClick={handleClose}>
                    Close
                </button>
                <button className="" onClick={handleClose}>
                    Save Changes
                </button>
            </Modal.Footer>
        </Modal>
    )
};
export default NewTalkTrackQuestion;