import React, {useState} from "react";
import {Link} from "react-router-dom";

const QuestionsPanel = props => {
    const {question, id} = props

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
                <Link className={'text-light'} to={`/subjects/${id}/questions/subject/${question.id}`}>edit</Link>
            </div>
        </div>
    )
};

export default QuestionsPanel;