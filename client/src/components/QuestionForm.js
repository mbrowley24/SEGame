import React from "react";
import useQuestion from "../hooks/useQuestion";

const QuestionForm = props => {
    const {question, submit, inputChange} = props;
    const {questionValidation} = useQuestion();



    return(
        <form onSubmit={submit} className={'p-1'}>
            <div className={''}>
                <label htmlFor="question"
                    className={'fw-bold text-jeopardy-yellow'}
                >Question</label>
                <textarea
                       name="question"
                       id="question"
                       cols="4"
                       rows="10"
                       value={question.question}
                       className="form-control border border-dark"
                       onChange={(e)=>inputChange(e)}
                ></textarea>
            </div>
            <div>
                <label htmlFor="answer"
                    className={'fw-bold text-jeopardy-yellow'}
                >Answer</label>
                <textarea
                       name="answer"
                       id="answer"
                       cols="4"
                       rows="10"
                       value={question.answer}
                       className={"form-control border border-dark"}
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