import React, {useMemo, useState} from "react";
import {useSelector} from "react-redux";
import CorrectIncorrect from "./CorrectIncorrect";
import Counter from "./Counter";
import "../css/generalCss.css"




const HostActiveQuestion = props => {
    const {id} = props;
    const [show, setShow] = useState(false);
    const game = useSelector(state => state.gameData);
    const question = useSelector(state => state.qAndAData);
    const timer = useMemo(() => game.buzzer.buzz, [game.buzzer.buzz]);


    return(
        <div className={'m-auto w-75'}>
            <div className={`d-flex justify-content-center bg-primary height50`}
                onMouseEnter={() => {setShow(true)}} onMouseLeave={() => {setShow(false)}}
            >
                <div className={'p-1 text-md-center align-self-center'}>

                    <div hidden={show}>
                        <p className={'text-light small text-size-1'}>Question: (hover mouse over for answer)</p>
                        <h1 className={'text-center text-warning text-size-2'}>{question.question}</h1>
                    </div>
                    <div hidden={!show}>
                        <p className={'text-light small text-size-1 '}>Answer</p>
                        <h1 className={'text-center fs-3 text-warning'}>{question.answer}</h1>
                    </div>
                </div>
            </div>
            <br/>
            <div className={!timer? 'height60px p-2 border-2 bg-warning' :
                'height60px p-2 border-2'
            }>
                {!timer && <CorrectIncorrect id={id} question={question}/>}
                {timer && <Counter/>}
            </div>
        </div>

    )
};
export default HostActiveQuestion;