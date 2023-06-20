import React from "react";



const GameTableHeader = props => {

    return(
        <thead>
            <tr>
                <th className={'text-capitalize'} scope={'col '}>name</th>
                <th className={'text-capitalize'} scope={'col text-capitalize'}>created by</th>
            </tr>
        </thead>
    )
};
export default GameTableHeader;