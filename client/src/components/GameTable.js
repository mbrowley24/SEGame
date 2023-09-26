import React from "react";
import GameTableBody from "./GameTableBody";
import GameTableHeader from "./GameTableHeader";
import "../css/subjectTable.css"



const GameTable = props => {


    return(
        <table className={'responsive-table highlight centered tableFixHead'}>
            <GameTableHeader/>
            <GameTableBody/>
        </table>

    )
};
export default GameTable;