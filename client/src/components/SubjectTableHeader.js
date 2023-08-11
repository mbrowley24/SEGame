import React from "react";
import "../css/subjectTable.css";


const SubjectTableHeader = props => {
    return(
        <thead>
            <tr className={'background-jeopardy'}>
                <th className={'text-jeopardy-orange fw-bold'}>Subject</th>
                <th className={'text-jeopardy-orange fw-bold'}>Questions</th>
            </tr>
        </thead>
    )
};
export default SubjectTableHeader;