import React from "react";
import "../css/subjectTable.css";
import "../css/generalCss.css";
import SubjectTableHeader from "./SubjectTableHeader";
import SubjectTableBody from "./SubjectTableBody";

const SubjectTable = props => {
    const {update} = props;
    return(
        <table className={'responsive-table highlight centered tableFixHead'}>
            <SubjectTableHeader/>
            <SubjectTableBody update={update}/>
        </table>
    )
};

export default SubjectTable;