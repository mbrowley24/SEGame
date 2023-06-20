import React, {useCallback, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {gameActions} from "../store/gameData";
import GameBoard from "./GameBoard";
import useGame from "../hooks/useGame";
const GameForm = props => {
    const {data, value, submit} = props;
    const dispatch = useDispatch();
    const {validateGame} = useGame();
    const game = useSelector(state => state.gameData);
    const gameValid = useMemo(() => validateGame(game), [game]);
    const [collectedProps, drop] = useDrop({
        accept: 'board',
        drop: (item, monitor) => {

            dispatch(gameActions.setBoard(item));
        }

    })


    const inputChange = useCallback((e) => {
        const {value} = e.target

        dispatch(gameActions.setName(value));
    },[]);


    return(
        <form onSubmit={submit}>
            <div>
                <label htmlFor="question">Name</label>
                <input type="text"
                       name={'question'}
                       id={'question'}
                       className={'form-control w-25 text-center m-auto'}
                       value={game.name}
                          onChange={(e)=>inputChange(e)}
                />
            </div>
            <div ref={drop}>
                <GameBoard data={game.board}/>
            </div>
            <div>
                <button
                    disabled={!gameValid}
                    className={'btn btn-sm btn-success'}
                >submit</button>
            </div>
        </form>
    )
};

export default GameForm;