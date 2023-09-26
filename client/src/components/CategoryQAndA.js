import React, {useMemo,useState} from "react";
import {useDrop} from "react-dnd";
import "../css/category.css"
import useCategory from "../hooks/useCategory";
import {useSelector} from "react-redux";
const QuestionQAndA= props => {
    const {data, value, setCategory} = props;
    const {duplicate, qAndACss} = useCategory();
    const types = useSelector(state => state.miscData.types);
    const [view, setView] = useState(false);
    const duplicateQuestion = useMemo(()=>duplicate(data, value), [data]);
    const [collect, drop] = useDrop(()=>({
        accept: "question",

        drop: (item, monitor)=>{

            setCategory(prevState => {

                return {
                    ...prevState,
                    [value]: item
                }
            });
        }
    }));




    return(
        <div ref={drop}
             className={qAndACss(duplicateQuestion)}

                onMouseEnter={()=>setView(true)}
                onMouseLeave={()=>setView(false)}
        >
            <div className={view?"": "align-self-center"} hidden={view}>
                <p className={'text-center text-jeopardy-yellow-static-fixed'}>{data[value].question}</p>
            </div>
            <div className={!view? "": "align-self-center"} hidden={!view}>
                <p className={'text-center text-jeopardy-yellow-static-fixed'}>{data[value].answer}</p>
            </div>
        </div>
    )
};

export default QuestionQAndA;