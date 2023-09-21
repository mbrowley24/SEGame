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
        <form onSubmit={submit} className={'bg-dark-green border rounded-3'}>
            <div className={'w-15 m-auto w-25 m-auto'}>
                <label htmlFor=""
                    className={`form-label-sm text-center text-capitalize text-size-18
                                text-jeopardy-yellow-static-fixed fw-bold`}
                >board name</label>
                <input type="text"
                    value={board.name}
                    placeholder="enter name"
                    className={'form-control-sm text-center text-jeopardy-yellow-static-fixed fw-bold'}
                    name={'name'}
                    onChange={(e) =>inputChange(e)}
                />
            </div>
            <BoardQAndA/>
            <div className={'py-2'}>
                <button
                    className={'btn btn-sm button-jeopardy-orange'}
                    disabled={!validateBoard(board)}
                >submit
                </button>
            </div>

        </form>
    )
};

export default BoardForm;