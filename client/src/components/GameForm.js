import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {gameActions} from "../store/gameData";
import GameBoard from "./GameBoard";
const GameForm = props => {
    const {data, value} = props;
    const dispatch = useDispatch();
    const game = useSelector(state => state.gameData);
    const [collectedProps, drop] = useDrop({
        accept: 'board',
        drop: (item, monitor) => {
            console.log(item)
            dispatch(gameActions.setBoard(item));
        }

    })

    const inputChange = useCallback((e) => {
        const {value} = e.target
        dispatch(gameActions.setName(value));
    },[]);


    return(
        <form action="">
            <div>
                <label htmlFor="question">Name</label>
                <input type="text"
                       name={'question'}
                       id={'question'}
                       className={'form-control w-25 m-auto'}
                       value={game.name}
                          onChange={(e)=>inputChange(e)}
                />
            </div>
            <div ref={drop}>
                <GameBoard data={game.board}/>
            </div>
        </form>
    )
};

export default GameForm;