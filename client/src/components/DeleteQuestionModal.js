import React, {useCallback} from "react";
import {Modal} from "react-bootstrap";
import useHttp from "../hooks/useHttp";



const DeleteQuestionModal = props => {
    const {question, show, handleClose, setQuestionData} = props;
    const {deleteHttpRequest} = useHttp();

    const handleDelete = useCallback(async () => {

        const configRequest = {
            url: `questions/${question.id}`,
        };
        const applyData = (res) => {
            console.log(res)
            if(res.status === 200){
            }
        };

        await deleteHttpRequest(configRequest, applyData);

    },[]);

    return(
        <Modal show={show} onHide={handleClose}
               {...props}
               size="sm"
               contentClassName={'bg-dark text-white'}
        >
            <Modal.Header closeButton>
                <Modal.Title>Delete Question</Modal.Title>
            </Modal.Header>
            <Modal.Body>{`Q ${question.question}
                          A ${question.answer}`}
            </Modal.Body>
            <Modal.Footer>
                <button className={'btn btn-secondary'} onClick={handleClose}>
                    Close
                </button>
                <button className={'btn btn-danger'} onClick={handleDelete}>
                    Save Changes
                </button>
            </Modal.Footer>
        </Modal>
    )
};
export default DeleteQuestionModal;