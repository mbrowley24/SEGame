import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";
import {IconContext} from "react-icons";
import {qAndAActions} from "../store/questionAndAnswerData";
import {gameActions} from "../store/gameData";

const ActiveQuestion = props => {
    const dispatch = useDispatch();
    const question = useSelector(state => state.qAndAData);

    const correctAnswer = useCallback(() => {

        dispatch(gameActions.correctAnswer(question.value));
        dispatch(qAndAActions.resetQAndA());

    }, []);

    const incorrectAnswer = useCallback(() => {

            dispatch(qAndAActions.resetQAndA());
            dispatch(gameActions.incorrectAnswer(question.value));

    }, []);


    return(
        <div>
            <p className={'text-center p-1'}>
                {question.question}
            </p>
            <div>
                <button
                    className={'btn btn-success'}
                    onClick={() => correctAnswer()}
                >
                    <IconContext.Provider value={{ color: "green", size: ".75em" }}>
                        <AiOutlineCheck/>
                    </IconContext.Provider>
                </button>
                <button
                    className={'btn btn-danger'}
                    onClick={() => incorrectAnswer()}
                >
                    <IconContext.Provider value={{ color: "red", size: ".75em" }}>
                        <AiOutlineClose/>
                    </IconContext.Provider>
                </button>
            </div>
        </div>

    )


};

export default ActiveQuestion;