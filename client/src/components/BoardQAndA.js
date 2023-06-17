import React from "react";
import BoardCategory from "./BoardCategory";
import {useSelector} from "react-redux";
const {boardActions} = require("../store/boardData");

const BoardQAndA = props => {
    const board = useSelector(state => state.boardData);
    return(
        <div className={'d-flex border'}>
            <div className={'w-100 m-auto border'}>
                <BoardCategory
                    data={board.category1}
                    delAction={boardActions.deleteCategory1}
                    action={boardActions.setCategory1}
                />
            </div>
            <div className={'w-100 m-auto border'}>
                <BoardCategory
                    data={board.category2}
                    delAction={boardActions.deleteCategory2}
                    action={boardActions.setCategory2}
                />
            </div>
            <div className={'w-100 m-auto border'}>
                <BoardCategory
                    data={board.category3}
                    delAction={boardActions.deleteCategory3}
                    action={boardActions.setCategory3}
                />
            </div>
            <div className={'w-100 m-auto border'}>
                <BoardCategory
                    data={board.category4}
                    delAction={boardActions.deleteCategory4}
                    action={boardActions.setCategory4}
                />
            </div>
            <div className={'w-100 m-auto border'}>
                <BoardCategory
                    data={board.category5}
                    delAction={boardActions.deleteCategory5}
                    action={boardActions.setCategory5}
                />
            </div>
            <div className={'w-100 m-auto border'}>
                <BoardCategory
                    data={board.category6}
                    delAction={boardActions.deleteCategory6}
                    action={boardActions.setCategory6}
                />
            </div>
        </div>
    )
};
export default BoardQAndA;