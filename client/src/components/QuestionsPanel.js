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
        <div className="d-flex w-75 m-auto border border-dark border-2 rounded">
            <div className={'w-50'}>
                <h6 className={'text-center fw-bold text-jeopardy-yellow'}>Question</h6>
                <p className={'text-jeopardy-yellow'}>{question.question}</p>
            </div>
            <div className={'w-25'}>
                <h6 className={'text-center fw-bold text-jeopardy-yellow'}>Answer</h6><h6></h6>
                <p className={'text-jeopardy-yellow'}>{question.answer}</p>
            </div>
            <div className={'w-25'}>
                <DeleteQuestionModal show={show}
                                     handleClose={handleClose}
                                     question={question}
                                     setQuestionData={setQuestionData}
                />

                <Link className={'btn btn-link background-jeopardy text-jeopardy-yellow-static_fixed'} to={`/subjects/${id}/questions/subject/${question.id}`}><RiEditBoxFill/></Link>
                <button className={'btn btn-danger ms-2'} onClick={showModal}><RiDeleteBin6Fill/></button>
            </div>
        </div>
    )
};

export default QuestionsPanel;