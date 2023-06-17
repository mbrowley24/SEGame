import React,{useState} from "react";




const GameQuestion = (props) => {
    const {data, value} = props;

    return(
        <div className={'col-4 border'}>
           <h4>${value}</h4>
        </div>
    )
};

export default GameQuestion;