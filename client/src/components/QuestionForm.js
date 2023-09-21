import React from "react";
import useQuestion from "../hooks/useQuestion";

const QuestionForm = props => {
    const {question, submit, inputChange} = props;
    const {questionValidation} = useQuestion();



    return(
        <form onSubmit={submit} className={'p-1 m-auto border border-dark bg-green'}>
            <div className={'input-field'}>
                <label htmlFor="question"
                    className={'fw-bold text-light'}
                >Question</label>
                <textarea
                    name="question"
                    id="question"
                    cols="4"
                    rows="30"
                    value={question.question}
                    className="materialize-textarea text-jeopardy-yellow-static-fixed"
                    onChange={(e)=>inputChange(e)}
                ></textarea>
            </div>
            <div className="input-field">
                <label htmlFor="answer"
                    className={'fw-bold text-light'}
                >Answer</label>
                <textarea
                    name="answer"
                    id="answer"
                    cols="4"
                    rows="10"
                    value={question.answer}
                    className={"materialize-textarea text-jeopardy-yellow-static-fixed"}
                    onChange={(e)=>inputChange(e)}
                ></textarea>
            </div>
            <div className={'my-1'}>
                <button
                    className={'btn button-jeopardy-orange'}
                    disabled={!questionValidation(question)}
                >submit</button>
            </div>

        </form>
    )
};

export default QuestionForm;