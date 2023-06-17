import React from "react";
import GameQuestion from "./GameQuestion";


const GameCategory = (props) => {
    const {category} = props;

    return(
        <div className={'col-4 border'}>
            <h6 className={'text-center'}>{category.name}</h6>
            <GameQuestion data={category} value={200}/>
            <GameQuestion data={category} value={400}/>
            <GameQuestion data={category} value={600}/>
            <GameQuestion data={category} value={800}/>
            <GameQuestion data={category} value={1000}/>
        </div>
    )
};

export default GameCategory;