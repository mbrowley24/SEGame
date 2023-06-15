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
             className={'border w-50 m-auto height100 overflow-auto d-flex justify-content-center p-1'}
             onMouseEnter={()=>onMouseEnter()}
             onMouseLeave={()=>setView(false)}
        >
            <div hidden={view} className={view? "": "align-self-center"}>

                <p className={'text-center'}>{data.question}</p>
            </div>
            <div hidden={!view} className={!view? "": "align-self-center"}>
                <p className={'align-self-center'}>{data.answer}</p>
            </div>
        </div>

    )
};

export default QuestionAnswer;