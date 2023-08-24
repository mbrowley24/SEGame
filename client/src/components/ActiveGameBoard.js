import React from "react";
import ActiveGameBoardCategory from "./ActiveGameBoardCategory";
import "../css/generalCss.css"



const ActiveGameBoard = props => {
    const {data, id} = props;

    return(
        <div className={'d-flex overflow-auto m-auto height90 container-fluid m-auto'}
        >
            <ActiveGameBoardCategory data={data.board.category1} id={id}/>
            <ActiveGameBoardCategory data={data.board.category2} id={id}/>
            <ActiveGameBoardCategory data={data.board.category3} id={id}/>
            <ActiveGameBoardCategory data={data.board.category4} id={id}/>
            <ActiveGameBoardCategory data={data.board.category5} id={id}/>
            <ActiveGameBoardCategory data={data.board.category6} id={id}/>
        </div>
    )
};

export default ActiveGameBoard;