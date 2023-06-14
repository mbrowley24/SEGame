import React, {useState} from "react";
import {useDrop} from "react-dnd";


const QuestionQAndA= props => {
    const {data, value, setCategory} = props;
    const [view, setView] = useState(false);
    const [collect, drop] = useDrop(()=>({
        accept: 'question',
        drop: (item, monitor)=>{
            setCategory(prevState => {

                return {
                    ...prevState,
                    [value]: item.data
                }
            })
            console.log(item.data)
            console.log(monitor)
        }
    }));

    return(
        <div ref={drop} className={'border'}>
            <div hidden={!view}>
                <p>{data.question}</p>
            </div>
            <div hidden={view}>
                <p>{data.answer}</p>
            </div>
        </div>
    )
};

export default QuestionQAndA;