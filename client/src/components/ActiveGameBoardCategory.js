import React from "react";
import ActiveGameBoardQandA from "./ActiveGameBoardQandA";
import "../css/generalCss.css"


const ActiveGameBoardCategory = props => {
    const {data, id} = props;
    return(
        <div className={'col height800px '}>
            <div className={'height50px d-flex bg-dark justify-content-center border rounded'}>
                <h4 className={'text-capitalize text-warning bg-dark fw-bold align-self-center'}>{data.name}</h4>
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