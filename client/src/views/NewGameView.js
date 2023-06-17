import React from "react";
import NavBar from "../components/NavBar";
import GameForm from "../components/GameForm";
import BoardGameTable from "../components/BoardGameTable";



const NewGameView = props => {

    return(
        <div>
            <NavBar/>
            <div className={'container'}>
                <h1>New Game</h1>
                <div className={'d-flex'}>
                    <div className={'w-25 me-2'}>
                        <h2 className={'text-center'}>boards</h2>
                        <BoardGameTable/>
                    </div>
                    <div className={'w-75 m-auto border ms-2'}>
                        <GameForm/>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default NewGameView;