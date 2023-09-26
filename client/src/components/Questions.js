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
            
                setQuestionData(res.data);
            }

            await getHttpRequest(configRequest, applyData);

        })();

        return () => {
            controller.abort();
        }

    }, [update]);

    return(
        <div className={'m-auto p-2 '}>
            <h1 className={'text-capitalize bg-dark-green border ' +
                'border-dark rounded text-center mb-3 w-50 m-auto text-light'}
            >{questionData.subject.name} questions</h1>
            <div className={'overflow-auto height400px'}>
                {
                    questionData.questions.length === 0 ? <h6>No questions</h6> : null
                }
                {
                    questionData.questions.map((question, index) => {
                        
                        return(
                            <QuestionsPanel key={`${index}/${question.id}`}
                                            id={id}
                                            question={question}
                                            setQuestionData={setQuestionData}/>
                        )
                    })
                }
            </div>

        </div>
    )
};

export default Questions;