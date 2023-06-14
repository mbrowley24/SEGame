import React, {useState} from "react";
import {useDrag} from "react-dnd";




const QuestionAnswer = props => {
    const {data} = props;
    const [view, setView] = useState(false);
    const [collect, drag] = useDrag(()=>({
        type: 'question',
        item: {data},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()? 0.5:1
        })
    }));


    return(
        <div ref={drag} className={'border'}>
            <div hidden={!view}>
                <p>{data.question}</p>
            </div>
            <div hidden={view}>
                <p>{data.answer}</p>
            </div>
        </div>

    )
};

export default QuestionAnswer;