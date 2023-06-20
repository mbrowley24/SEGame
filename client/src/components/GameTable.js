import React from "react";
import GameTableBody from "./GameTableBody";
import GameTableHeader from "./GameTableHeader";
import "../css/subjectTable.css"



const GameTable = props => {


    return(
        <table className={'table tableFixHead'}>
            <GameTableHeader/>
            <GameTableBody/>
        </table>

    )
};
export default GameTable;