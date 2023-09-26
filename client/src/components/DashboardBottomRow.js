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
        <div className={'row p-2 bg-dark-pink rounded-3 '}>
            <div className={'col border-end border-dark'}>
                <h4 className={'text-center text-light text-capitalize p-2 m-auto my-1 p-1 w-50 rounded-3 ' +
                    '  fw-bolder sticky'}>
                    games boards
                    <Link className={'ms-1 text-light'} to={'/jeopardy/board'}>
                        <IconContext.Provider value={{className:'',  color: "", size: ".75em" }}>
                            <BsFillPlusSquareFill/>
                        </IconContext.Provider>
                    </Link>
                </h4>
                <div className={'height30 overflow-auto'}>
                    <BoardTable/>
                </div>
            </div>
            <div className={'col  border-dark'}>
                <h4 className={'text-center text-light text-capitalize p-2 m-auto my-1 p-1 w-50 rounded-3 ' +
                    '  fw-bolder sticky'}>
                    games
                    <Link className={'ms-1 text-light'} to={'/jeopardy/games'}>
                        <IconContext.Provider value={{className:'',  color: "", size: ".75em" }}>
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