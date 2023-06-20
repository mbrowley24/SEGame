import React from "react";
import GameFormCategory from "./GameFormCategory";



const GameBoard = props => {
    const {data} = props;



    return(
        <div className={'d-flex p-2 '}>
            <GameFormCategory data={data.category1}/>
            <GameFormCategory data={data.category2}/>
            <GameFormCategory data={data.category3}/>
            <GameFormCategory data={data.category4}/>
            <GameFormCategory data={data.category5}/>
            <GameFormCategory data={data.category6}/>
        </div>
    )
};
export default GameBoard;