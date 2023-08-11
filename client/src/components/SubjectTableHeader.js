import React from "react";
import "../css/subjectTable.css";


const SubjectTableHeader = props => {
    return(
        <thead>
            <tr>
                <th className={'text-jeopardy-yellow fw-bold'}>Subject</th>
                <th className={'text-jeopardy-yellow fw-bold'}>Questions</th>
            </tr>
        </thead>
    )
};
export default SubjectTableHeader;