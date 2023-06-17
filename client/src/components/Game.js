import React from "react";
import Players from "./Players";
import GameBoard from "./GameBoard";



const Game = (props) => {

    return(
        <div className={'d-flex p-2 '}>
            <section className={'border'}>
                <Players/>
            </section>
            <section>
                <GameBoard/>
            </section>
        </div>
    )

};
export default Game;