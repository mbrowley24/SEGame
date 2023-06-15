import React, {useState, useEffect} from "react";
import useHttp from "../hooks/useHttp";
import QuestionAnswer from "./QuestionAnswer";

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

        return ()=>{
            controller.abort();
        }

    },[id])

    return(
        <div>
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