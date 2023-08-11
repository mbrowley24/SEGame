import React, {useState} from "react";
import {useDrag} from "react-dnd";
import "../css/category.css"



const QuestionAnswer = props => {
    const {data} = props;
    const [view, setView] = useState(false);

    const [collect, drag] = useDrag(()=>({
        type: "question",
        item: data,
        collect: monitor => ({
            isDragging: !!monitor.isDragging()? 0.5:1
        })
    }));

    const onMouseEnter = ()=>{
        setView(true)

    }



    return(
        <div ref={drag}
             className={'border border-dark height150Px w-75 m-auto my-2' +
                 ' d-flex justify-content-center p-1 background-jeopardy'}
             onMouseEnter={()=>onMouseEnter()}
             onMouseLeave={()=>setView(false)}
        >
            <div hidden={view} className={view? "": "align-self-center background-jeopardy"}>

                <p className={'text-center text-jeopardy-yellow'}>{data.question}</p>
            </div>
            <div hidden={!view} className={!view? "": "align-self-center background-jeopardy"}>
                <p className={'align-self-center text-jeopardy-yellow'}>{data.answer}</p>
            </div>
        </div>

    )
};

export default QuestionAnswer;