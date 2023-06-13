import React, {useState} from "react";

const QuestionsPanel = props => {
    const {question} = props
    const [expand, setExpand] = useState(true);
    

    return(
        <div className="w-75 m-auto row border">
            <div className={'text-end'}>
                <span className={'text-secondary'}>{question.difficulty}</span>
            </div>
            <div className={'col'} hidden={!expand}>
                <h6 className={'text-center'}>Question</h6>
                <p>{question.question}</p>
            </div>
            <div className={'col'} hidden={!expand}>
                <h6 className={'text-center'}>Answer</h6><h6></h6>
                <p>{question.answer}</p>
            </div>
        </div>
    )
};

export default QuestionsPanel;