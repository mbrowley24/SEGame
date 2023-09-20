import React from "react";


const CategoryTableHeader = props => {

    return(
        <thead>
            <tr>
                <th className={'text-capitalize color_light fw-bold'}>category</th>
                <th className={'text-capitalize color_light fw-bold'}>created by</th>
                <th className={'text-capitalize color_light fw-bold'}>action</th>
            </tr>
        </thead>
    )
};

export default CategoryTableHeader;