import React from "react";
import {Modal} from "react-bootstrap";
import useHttp from "../hooks/useHttp";



const DeleteBoardModal = (props) => {
    const {board, show, handleClose} = props;
    const {deleteHttpRequest} = useHttp();

    const handleDelete = async () => {
        console.log('Delete board');

        const configRequest = {
            url: `myBoards/${board.id}`,
        };
        const applyData = (res) => {

            if(res.status === 200){
                console.log(board)
                handleClose();
            }

        };

        await deleteHttpRequest(configRequest, applyData);
    };

    return(
        <Modal show={show} onHide={handleClose}
               {...props}
               size="sm"
               contentClassName={'bg-dark text-white'}
        >
            <Modal.Header closeButton>
                <Modal.Title>Delete Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>{`Delete ${category.name}`}</Modal.Body>
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
export default DeleteBoardModal;