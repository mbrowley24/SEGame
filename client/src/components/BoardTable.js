import React from "react";
import "../css/subjectTable.css"
import "../css/generalCss.css"
import BoardTableHeader from "./BoardTableHeader";
import BoardTableBody from "./BoardTableBody";

const BoardTable = (props) => {

    return(
        <table className={'responsive-table highlight centered tableFixHead bg-dark-green'}>
            <BoardTableHeader/>
            <BoardTableBody/>
        </table>
    )
};
export default BoardTable;