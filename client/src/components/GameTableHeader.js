import React from "react";



const GameTableHeader = props => {

    return(
        <thead>
            <tr>
                <th className={' text-capitalize color_light fw-bold'} scope={'col '}>name</th>
                <th className={' text-capitalize color_light fw-bold'} scope={'col text-capitalize'}>created by</th>
            </tr>
        </thead>
    )
};
export default GameTableHeader;