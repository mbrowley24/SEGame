import React, {useCallback ,useState} from "react";
import QuestionForm from "../components/QuestionForm";
import Questions from "../components/Questions";
import {useParams} from "react-router-dom";
import NavBar from "../components/NavBar";
import useQuestion from "../hooks/useQuestion";
import useHttp from "../hooks/useHttp";
import {useDispatch} from "react-redux";
import {miscDataActions} from "../store/miscData";
const QuestionView = props => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {questionValidation, questionInputRegex, questionInitShape} = useQuestion();
    const [question, setQuestion] = useState(questionInitShape);
    const {postHttpRequest} = useHttp();

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

    const submit = async (e) => {
        e.preventDefault();

        if(questionValidation(question)){

            const requestConfig={
                url: `questions/subjects/${id}`,
                data: question
            }

            const applyData = (res) => {
                console.log(res)
                setQuestion(questionInitShape);
                dispatch(miscDataActions.setUpdate());
            };

            await postHttpRequest(requestConfig, applyData);
        }
    };


    return(
        <div>
            <NavBar/>
            <div className={'container d-flex justify-content-center'}>
                <div className={'w-25 border'}>
                    <QuestionForm
                        question={question}
                        submit={submit}
                        setQuestion={setQuestion}
                        inputChange={inputChange}
                    />
                </div>
                <div className={'w-75 border p-2'}>
                    <Questions id={id}/>
                </div>
            </div>
        </div>

    )
};

export default QuestionView;