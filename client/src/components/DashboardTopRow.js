import React from "react";
import {Link} from "react-router-dom";
import {IconContext} from "react-icons";
import {BsFillPlusSquareFill} from "react-icons/bs";
import SubjectTable from "./SubjectTable";
import CategoryTable from "./CategoryTable";
import "../css/generalCss.css"

const DashboardTopRow = props => {

    return(
        <div className={'row p-2 border-bottom border-dark border-2 complement-board-bg'}>
            <div className={'col border-end border-dark rounded'}>
                <h4 className={'text-center text-capitalize p-2 m-auto my-1 p-1 w-50 rounded-3 background-jeopardy' +
                    ' text-jeopardy-orange fw-bolder sticky'}>
                    question subjects
                    <Link className={'ms-1'} to={'/subjects'}>
                        <IconContext.Provider value={{className:'text-jeopardy-orange',  color: "", size: ".75em" }}>
                            <BsFillPlusSquareFill/>
                        </IconContext.Provider>
                    </Link>
                </h4>
                <div className={'height30 overflow-auto skinny_black_scroll_bar complement-board-bg'}>
                    <SubjectTable/>
                </div>
            </div>
            <div className={'col border-start border-dark'}>
                <h4 className={'text-center text-capitalize p-2 m-auto my-1 p-1 w-50 rounded-3 background-jeopardy' +
                    ' text-jeopardy-orange fw-bolder sticky'}>
                    categories
                    <Link className={'ms-1'} to={'/categories'}>
                        <IconContext.Provider value={{className:'text-jeopardy-orange',  color: "", size: ".75em" }}>
                            <BsFillPlusSquareFill/>
                        </IconContext.Provider>
                    </Link>
                </h4>
                <div className={'height30 overflow-auto'}>
                    <CategoryTable/>
                </div>
            </div>
        </div>
    )
};

export default DashboardTopRow;