import React, {useCallback} from "react";
import {Modal} from "react-bootstrap";
import useHttp from "../hooks/useHttp";
import "../css/generalCss.css"

const DeleteCategoryModal = props => {
    const {category, show, handleClose, setCategories} = props;
    const {deleteHttpRequest} = useHttp();

    const handleDelete = useCallback(async () => {
        console.log('Delete category');

        const configRequest = {
            url: `myCategories/${category.id}`,
        };
        const applyData = (res) => {

            if(res.status === 200){

                setCategories((category_list)=>{
                    return category_list.filter((cat)=>{

                        return cat.id !== category.id
                    })
                })

                console.log(category)
                handleClose();
            }

        };

        await deleteHttpRequest(configRequest, applyData);

    },[]);



    return(
        <React.Fragment>
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
        </React.Fragment>
    )
};
export default DeleteCategoryModal;