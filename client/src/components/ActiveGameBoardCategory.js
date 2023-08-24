import React from "react";
import ActiveGameBoardQandA from "./ActiveGameBoardQandA";
import "../css/generalCss.css"


const ActiveGameBoardCategory = props => {
    const {data, id} = props;
    return(
        <div className={'col-sm-2 height80 overflow-hidden'}>
            <div className={'height5 overflow-hidden d-flex bg-dark justify-content-center border rounded'}>
                <h4 className={'text-capitalize text-warning bg-dark ' +
                    'text-size-1 fw-bold align-self-center overflow-hidden'}>{data.name}</h4>
            </div>
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