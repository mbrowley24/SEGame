import React, {useState} from "react";
import {Link} from "react-router-dom";
import DeleteQuestionModal from "./DeleteQuestionModal";
import {RiDeleteBin6Fill, RiEditBoxFill} from "react-icons/ri";

const QuestionsPanel = props => {
    const {question, id, setQuestionData} = props
    const [show, setShow] = useState(false);
    const showModal = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
        <div className="d-flex m-auto border border-dark border-2 rounded bg-green">
            <div className={'w-50'}>
                <h6 className={'text-center fw-bold text-jeopardy-yellow-static-fixed'}>Question</h6>
                <p className={'text-light'}>{question.question}</p>
            </div>
            <div className={'w-50'}>
                <h6 className={'text-center fw-bold text-light'}>Answer</h6><h6></h6>
                <p className={'text-jeopardy-yellow-static-fixed'}>{question.answer}</p>
            </div>
            <div className={'w-25 p-3'}>
                <DeleteQuestionModal show={show}
                                    handleClose={handleClose}
                                    question={question}
                                    setQuestionData={setQuestionData}
                />

                <Link className={'btn-small bg-dark-green '} 
                        to={`/jeopardy/subjects/${id}/questions/subject/${question.id}`}>
                            <i className="material-icons">edit</i>
                </Link>
                <button className={'btn-small ms-2 bg-dark-green'} onClick={showModal}>
                    <i className="material-icons text-danger">delete_forever</i>
                </button>
            </div>
        </div>
    )
};

export default QuestionsPanel;