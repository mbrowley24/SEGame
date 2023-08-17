import React, {useCallback, useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import QuestionForm from "../components/QuestionForm";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import useQuestion from "../hooks/useQuestion";
import useHttp from "../hooks/useHttp";
import {miscDataActions} from "../store/miscData";



const QuestionEditView = props => {
    const {subjectId, id} = useParams();
    const dispatch = useDispatch();
    const {questionValidation, questionInputRegex, questionInitShape} = useQuestion();
    const [question, setQuestion] = useState(questionInitShape);
    const {putHttpRequest, getHttpRequest} = useHttp();


    const inputChange = useCallback((e) => {
        if(questionInputRegex(e.target.value)){
            setQuestion((question)=>{
                return{
                    ...question,
                    [e.target.name]: e.target.value
                }
            })
        }

    }, []);

    useEffect(() => {

        const controller = new AbortController();

        (async () => {

                const requestConfig={
                    url: `questions/subjects/edit/${subjectId}`,
                    signal: controller.signal
                }

                const applyData = (res) => {
                    console.log(res)

                    if(res.status === 200){
                        setQuestion(res.data);
                    }

                };

                await getHttpRequest(requestConfig, applyData);
        })();

        return () => {
            controller.abort();
        }

    }, []);

    const submit = async (e) => {
        e.preventDefault();

        if(questionValidation(question)){

            const requestConfig={
                url: `questions/subjects/edit/${subjectId}`,
                data: question
            }

            const applyData = (res) => {
                console.log(res)
                if(res.status === 200){
                    setQuestion(questionInitShape);
                    dispatch(miscDataActions.setUpdate());
                }

            };

            await putHttpRequest(requestConfig, applyData);
        }
    };

    return(
        <div>
            <NavBar/>
            <h1 className={'py-3 my-2 text-jeopardy-yellow-static'}>Edit Question</h1>
            <div className={'container d-flex justify-content-center height875px'}>
                <div className={'w-25  p-3'}>
                    <QuestionForm
                        question={question}
                        submit={submit}
                        setQuestion={setQuestion}
                        inputChange={inputChange}
                    />
                </div>
            </div>
        </div>
    )
};
export default QuestionEditView;