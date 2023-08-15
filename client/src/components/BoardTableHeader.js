import React from "react";



const BoardTableHeader = (props) => {

    return(
        <thead>
            <tr>
                <th className={' text-capitalize text-jeopardy-yellow fw-bold'} scope="col">board</th>
                <th className={' text-capitalize text-jeopardy-yellow fw-bold'} scope="col">created by</th>
            </tr>
        </thead>
    )
};

export default BoardTableHeader;