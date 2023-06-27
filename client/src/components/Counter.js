import React,{useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {gameActions} from "../store/gameData";


const Counter = props => {
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(5);
    const buzzed = useSelector(state => state.gameData.buzzer.buzz);

    useEffect(() => {

        if(!buzzed){
            return;
        }

        const interval = setInterval(() => {

            setCounter((counter) =>{

                return counter > 0 ? counter - 1 : 0

            });

        }, 1000);

        if(counter === 0){

            setCounter(5);
            dispatch(gameActions.buzzerTimeout());
        }



        return () => clearInterval(interval);

    }, [counter, buzzed]);



    return(
        <React.Fragment>
            <h1 className={'display-1 text-warning '}>{counter}</h1>
        </React.Fragment>
    )
};

export default Counter;