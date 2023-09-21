import React, {useMemo,useState} from "react";
import useBoard from "../hooks/useBoard";
import {useSelector} from "react-redux";


const BoardQuestion = props => {
    const {data, value, name} = props;
    const [view, setView] = useState(false);
    const {checkNode} = useBoard();
    const board = useSelector(state => state.boardData);
    const nodeCheck = useMemo(() => checkNode(name, data[value].question, board), [board]);
    const showAnswer = () => setView(true);
    const hideAnswer = () => setView(false);

    return(
        <div className={nodeCheck}
        >
            <div className={view?"": "align-self-center"} hidden={view}>
                <p className={'text-center text-size-12'}>{data[value].question}</p>
            </div>
            <div className={!view? "": "align-self-center"} hidden={!view}>
                <p className={'text-center small'}>{data[value].answer}</p>
            </div>
            {/*{!view && data.name && <button className={'btn btn-link'} onClick={()=>showAnswer()}>answer</button>}*/}
            {/*{view && <button className={'btn btn-link'} onClick={()=>hideAnswer()}>question</button>}*/}
        </div>
    )
};

export default BoardQuestion;