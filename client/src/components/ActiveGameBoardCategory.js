import React from "react";
import ActiveGameBoardQandA from "./ActiveGameBoardQandA";



const ActiveGameBoardCategory = props => {
    const {data} = props;
    return(
        <div className={'col'}>
            <h6>{data.name}</h6>
            <div>
                <ActiveGameBoardQandA data={data} value={200}/>
                <ActiveGameBoardQandA data={data} value={400}/>
                <ActiveGameBoardQandA data={data} value={600}/>
                <ActiveGameBoardQandA data={data} value={800}/>
                <ActiveGameBoardQandA data={data} value={1000}/>
            </div>
        </div>
    )
};

export default ActiveGameBoardCategory;