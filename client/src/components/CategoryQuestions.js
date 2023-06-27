import React, {useState, useEffect} from "react";
import useHttp from "../hooks/useHttp";
import QuestionAnswer from "./QuestionAnswer";
import "../css/generalCss.css"

const CategoryQuestions = props => {
    const {id} = props;
    const {getHttpRequest} = useHttp();
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{

        const controller = new AbortController();

        if(id.length !== 0){

            (async ()=>{
                const configRequest={
                    url: `questions/subjects/${id}`,
                    signal: controller.signal
                }

                const applyData = (res)=>{
                    console.log(res)
                    setQuestions(res.data.questions)
                }

                await getHttpRequest(configRequest, applyData);

            })();
        }

        if(id.length === 0){
            setQuestions([])
        }

        return ()=>{
            controller.abort();
        }

    },[id])

    return(
        <div className={'height600px overflow-auto'}>
            {
                questions.length === 0 &&
                <p className={'text-capitalize'}>no questions</p>
            }
            {
                questions.map((item, index)=>{

                    return(
                        <QuestionAnswer key={`${index}${item.id}`}
                                        data={item}

                        />
                    )
                })
            }
        </div>
    )
};

export default CategoryQuestions;