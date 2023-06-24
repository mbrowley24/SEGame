import React from "react";
import ActiveGameBoardQandA from "./ActiveGameBoardQandA";



const ActiveGameBoardCategory = props => {
    const {data, id} = props;
    return(
        <div className={'col'}>
            <h6>{data.name}</h6>
            <div>
                <ActiveGameBoardQandA data={data} value={200} id={id}/>
                <ActiveGameBoardQandA data={data} value={400} id={id}/>
                <ActiveGameBoardQandA data={data} value={600} id={id}/>
                <ActiveGameBoardQandA data={data} value={800} id={id}/>
                <ActiveGameBoardQandA data={data} value={1000} id={id}/>
            </div>
        </div>
    )
};

export default ActiveGameBoardCategory;