import React from "react";
import {Link} from "react-router-dom";
import {IconContext} from "react-icons";
import {BsFillPlusSquareFill} from "react-icons/bs";
import SubjectTable from "./SubjectTable";
import CategoryTable from "./CategoryTable";
import "../css/generalCss.css"

const DashboardTopRow = props => {

    return(
        <div className={'row p-2 border rounded'}>
            <div className={'col border rounded'}>
                <h4 className={'text-center text-capitalize sticky'}>
                    question subjects
                    <Link className={'ms-1'} to={'/subjects'}>
                        <IconContext.Provider value={{ color: "grey", size: ".75em" }}>
                            <BsFillPlusSquareFill/>
                        </IconContext.Provider>
                    </Link>
                </h4>
                <div className={'height30 overflow-auto skinny_black_scroll_bar'}>
                    <SubjectTable/>
                </div>
            </div>
            <div className={'col border'}>
                <h4 className={'text-center text-capitalize'}>
                    categories
                    <Link className={'ms-1'} to={'/categories'}>
                        <IconContext.Provider value={{ color: "grey", size: ".75em" }}>
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