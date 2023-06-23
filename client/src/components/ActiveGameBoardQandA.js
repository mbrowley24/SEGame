import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {qAndAActions} from "../store/questionAndAnswerData";
import "../css/generalCss.css"

const ActiveGameBoardQandA = props => {
    const {data, value} = props;

    const dispatch = useDispatch();

    const attemptedQuestions = () => {

        const questionData={
            question: data[value].question,
            answer: data[value].answer,
            value: value,
            attempt: true
        }

        dispatch(qAndAActions.setQAndA(questionData));

    };

    return(
        <div className={'border d-flex height100Px justify-content-center bg-primary'}>
            <h5 className={'align-self-center'}>
                <button className={'btn btn-link text-warning fw-bold'}
                        onClick={attemptedQuestions}

                >
                    {`$${value}`}
                </button>

            </h5>
        </div>
    )
};
export default ActiveGameBoardQandA;