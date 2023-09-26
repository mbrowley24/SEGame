import React, {useCallback ,useState} from "react";
import QuestionForm from "../components/QuestionForm";
import Questions from "../components/Questions";
import {useParams} from "react-router-dom";
import NavBar from "../components/NavBar";
import useQuestion from "../hooks/useQuestion";
import useHttp from "../hooks/useHttp";
import {useDispatch} from "react-redux";
import {miscDataActions} from "../store/miscData";
import "../css/generalCss.css"


const QuestionView = props => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [error, setrError] = useState("");
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
                
                if(res.status === 200){
                    setQuestion(questionInitShape);
                    dispatch(miscDataActions.setUpdate());
                }
                
                if(res.status === 400){
                    console.log(res.data);
                    setrError(res.data);
                }
            };

            await postHttpRequest(requestConfig, applyData);
        }
    };


    return(
        <div className="height101 bg-light-gray">
            <NavBar/>
            <div className={'d-flex p-2 align-items-center justify-content-evenly'}>
                <div className={'w-50 p-3'}>
                    
                    <QuestionForm
                        question={question}
                        submit={submit}
                        setQuestion={setQuestion}
                        inputChange={inputChange}
                    />
                </div>
                <div className={'w-75 border-start border-dark p-2'}>
                    <Questions id={id}/>
                </div>
            </div>
        </div>

    )
};

export default QuestionView;