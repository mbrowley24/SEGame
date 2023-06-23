import React from "react";
import ActiveGameBoardCategory from "./ActiveGameBoardCategory";




const ActiveGameBoard = props => {
    const {data} = props;
    console.log(data);
    return(
        <div className={'d-flex m-auto'}
        >
            <ActiveGameBoardCategory data={data.board.category1}/>
            <ActiveGameBoardCategory data={data.board.category2}/>
            <ActiveGameBoardCategory data={data.board.category3}/>
            <ActiveGameBoardCategory data={data.board.category4}/>
            <ActiveGameBoardCategory data={data.board.category5}/>
            <ActiveGameBoardCategory data={data.board.category6}/>
        </div>
    )
};

export default ActiveGameBoard;