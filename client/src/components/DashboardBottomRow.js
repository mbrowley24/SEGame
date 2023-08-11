import React from "react";
import {Link} from "react-router-dom";
import {IconContext} from "react-icons";
import {BsFillPlusSquareFill} from "react-icons/bs";
import SubjectTable from "./SubjectTable";
import CategoryTable from "./CategoryTable";
import BoardTable from "./BoardTable";
import GameTable from "./GameTable";




const DashboardBottomRow = (props) => {

    return(
        <div className={'row p-2 complement-board-bg '}>
            <div className={'col border-end border-dark'}>
                <h4 className={'text-center text-capitalize p-2 m-auto my-1 p-1 w-50 rounded-3 background-jeopardy' +
                    ' text-jeopardy-orange fw-bolder sticky'}>
                    games boards
                    <Link className={'ms-1'} to={'/board'}>
                        <IconContext.Provider value={{className:'text-jeopardy-orange',  color: "", size: ".75em" }}>
                            <BsFillPlusSquareFill/>
                        </IconContext.Provider>
                    </Link>
                </h4>
                <div className={'height30 overflow-auto'}>
                    <BoardTable/>
                </div>
            </div>
            <div className={'col border-start border-dark'}>
                <h4 className={'text-center text-capitalize p-2 m-auto my-1 p-1 w-50 rounded-3 background-jeopardy' +
                    ' text-jeopardy-orange fw-bolder sticky'}>
                    games
                    <Link className={'ms-1'} to={'/games'}>
                        <IconContext.Provider value={{className:'text-jeopardy-orange',  color: "", size: ".75em" }}>
                            <BsFillPlusSquareFill/>
                        </IconContext.Provider>
                    </Link>
                </h4>
                <div className={'height30 overflow-auto'}>
                    <GameTable/>
                </div>
            </div>
        </div>
    )
};

export default DashboardBottomRow;