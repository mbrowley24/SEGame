import React from "react";


const CategoryTableHeader = props => {

    return(
        <thead>
            <tr>
                <th className={'text-capitalize text-center'}>category</th>
                <th  className={'text-capitalize text-center'}>created by</th>
            </tr>
        </thead>
    )
};

export default CategoryTableHeader;