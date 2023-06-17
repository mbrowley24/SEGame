import React from "react";
import GameTableBody from "./GameTableBody";
import GameTableHeader from "./GameTableHeader";




const GameTable = props => {


    return(
        <table>
            <GameTableHeader/>
            <GameTableBody/>
        </table>

    )
};
export default GameTable;