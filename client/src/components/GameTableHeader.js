import React from "react";



const GameTableHeader = props => {

    return(
        <thead>
            <tr>
                <th className={' text-capitalize text-jeopardy-yellow fw-bold'} scope={'col '}>name</th>
                <th className={' text-capitalize text-jeopardy-yellow fw-bold'} scope={'col text-capitalize'}>created by</th>
            </tr>
        </thead>
    )
};
export default GameTableHeader;