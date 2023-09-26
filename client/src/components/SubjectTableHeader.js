import React from "react";
import "../css/subjectTable.css";


const SubjectTableHeader = props => {
    return(
        <thead>
            <tr className={''}>
                <th className={'fw-bold color_light'}>Subject</th>
                <th className={'fw-bold color_light'}>Questions</th>
            </tr>
        </thead>
    )
};
export default SubjectTableHeader;