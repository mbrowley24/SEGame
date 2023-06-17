import React from "react";
import "../css/subjectTable.css"
import BoardTableHeader from "./BoardTableHeader";
import BoardTableBody from "./BoardTableBody";

const BoardTable = (props) => {

    return(
        <table className={'table tableFixHead'}>
            <BoardTableHeader/>
            <BoardTableBody/>
        </table>
    )
};
export default BoardTable;