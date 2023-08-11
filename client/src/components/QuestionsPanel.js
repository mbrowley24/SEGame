import React, {useState} from "react";

const QuestionsPanel = props => {
    const {question} = props
    const [expand, setExpand] = useState(true);
    

    return(
        <div className="w-75 m-auto row border border-dark border-2 rounded">
            <div className={'text-end'}>
                <span className={'text-secondary'}>{question.difficulty}</span>
            </div>
            <div className={'col'} hidden={!expand}>
                <h6 className={'text-center fw-bold text-jeopardy-yellow'}>Question</h6>
                <p className={'text-jeopardy-yellow'}>{question.question}</p>
            </div>
            <div className={'col'} hidden={!expand}>
                <h6 className={'text-center fw-bold text-jeopardy-yellow'}>Answer</h6><h6></h6>
                <p className={'text-jeopardy-yellow'}>{question.answer}</p>
            </div>
        </div>
    )
};

export default QuestionsPanel;