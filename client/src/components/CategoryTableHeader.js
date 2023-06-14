import React from "react";


const CategoryTableHeader = props => {

    return(
        <thead>
            <tr>
                <th className={'text-capitalize text-center'}>category</th>
                <th className={'text-capitalize text-center'}>is complete</th>
            </tr>
        </thead>
    )
};

export default CategoryTableHeader;