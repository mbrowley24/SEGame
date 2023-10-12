import React, {useCallback, useReducer} from "react";
import TalkTrackQuestionForm from "./TalkTrackQuestionForm";
import useTalkTrack from "../../hooks/useTalkTrack";
import Modal from 'react-bootstrap/Modal';
import useHttp from "../../hooks/useHttp";

const NewTalkTrackQuestion = props => {
    
    const {show, handleClose, setUpdate} = props;
    const {QUESTION_FIELDS, question, talkTrackQuestionReducer} = useTalkTrack();
    const [questionData, dispatch] = useReducer(talkTrackQuestionReducer, question);
    const {postHttpRequest } = useHttp();

    const inputChange = useCallback((e) => {
        const {value, name} = e.target;
        
        dispatch({type: name, payload: value});

    },[]);


    const closeModal = () =>{
        handleClose();
        dispatch({type: QUESTION_FIELDS.RESET, payload: ""});   
    }


    const submit = async (e) => {
        e.preventDefault();

        const configRequest = {
            url: "talktracks",
            data: questionData,
        };
        
        const applyData= (res) =>{
            
            if(res.status === 200){
                setUpdate((state)=>!state)
                closeModal();
            }
        }

        await postHttpRequest(configRequest, applyData);
    };

    return(
        <Modal
            show={show}
            onHide={closeModal}
            className="bg-light-gray"
            dialogClassName="rounded-3"
            backdropClassName="bg-dark"
            >
            <Modal.Header closeButton>
                <Modal.Title>New Questions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TalkTrackQuestionForm 
                    inputChange={inputChange}
                    submit={submit}
                    questionData={questionData}
                    />
            </Modal.Body>
            <Modal.Footer>
                <button className="btn-small" onClick={closeModal}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    )
};
export default NewTalkTrackQuestion;