import React from "react";


const CategoryTableHeader = props => {

    return(
        <thead>
            <tr>
                <th className={'text-capitalize text-jeopardy-yellow fw-bold'}>category</th>
                <th  className={'text-capitalize text-jeopardy-yellow fw-bold'}>created by</th>
            </tr>
        </thead>
    )
};

export default CategoryTableHeader;