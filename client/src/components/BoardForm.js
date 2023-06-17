import React from "react";
import BoardQAndA from "./BoardQAndA";
import "../css/generalCss.css"
import {useSelector} from "react-redux";
import useBoard from "../hooks/useBoard";
const BoardForm = props => {
    const {inputChange, submit} = props;
    const board  = useSelector(state => state.boardData);
    const {validateBoard} = useBoard();
    return(
        <form onSubmit={submit}>
            <div className={'w-15 m-auto'}>
                <label htmlFor="">board name</label>
                <input type="text"
                       value={board.name}
                       className={'form-control-sm'}
                        name={'name'}
                        onChange={(e) =>inputChange(e)}
                />
            </div>
            <BoardQAndA/>
            <div className={'py-2'}>
                <button
                    className={'btn btn-sm btn-success'}
                    disabled={!validateBoard(board)}
                >submit
                </button>
            </div>

        </form>
    )
};

export default BoardForm;