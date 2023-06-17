import React from "react";
import BoardGameTableHeader from "./BoardGameTableHeader";
import BoardGameTableBody from "./BoardGameTableBody";



const BoardGameTable = props => {

    return(
        <table className={'table'}>
            <BoardGameTableHeader/>
            <BoardGameTableBody/>
        </table>
    )
};

export default BoardGameTable;