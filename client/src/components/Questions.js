import React, {useState, useEffect} from "react";
import useHttp from "../hooks/useHttp";
import QuestionsPanel from "./QuestionsPanel";
import useQuestion from "../hooks/useQuestion";
import {useSelector} from "react-redux";
import {miscDataActions} from "../store/miscData";

const Questions = props => {
    const {id} = props;

    const update = useSelector(state => state.miscData.update);
    const {questionSubject} = useQuestion();
    const [questionData, setQuestionData] = useState(questionSubject);
    const {getHttpRequest} = useHttp();

    useEffect(() => {

        const controller = new AbortController();

        (async () => {

            const configRequest = {
                url: `questions/subjects/${id}`,
                signal: controller.signal
            };


            const applyData = (res) => {
                console.log(res.data);
                setQuestionData(res.data);
            }

            await getHttpRequest(configRequest, applyData);

        })();

        return () => {
            controller.abort();
        }

    }, [update]);

    return(
        <div className={'m-auto border border-danger p-2'}>
            <h1 className={'text-capitalize text-center'}>{questionData.subject.name} questions</h1>
            {
                questionData.questions.length === 0 ? <h6>No questions</h6> : null
            }
            {
                questionData.questions.map((question, index) => {
                    return(
                        <QuestionsPanel key={index} question={question}/>
                    )
                })
            }
        </div>
    )
};

export default Questions;