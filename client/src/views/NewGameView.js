import React, {useMemo} from "react";
import NavBar from "../components/NavBar";
import GameForm from "../components/GameForm";
import BoardGameTable from "../components/BoardGameTable";
import useHttp from "../hooks/useHttp";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {gameActions} from "../store/gameData";

const NewGameView = props => {
    const {postHttpRequest} = useHttp();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const game = useSelector(state => state.gameData);

    const submitHandler = async (e) => {
        e.preventDefault();
        const configRequest = {
            url:"game",
            data: game
        };

        const applyData = (res) =>{

            if(res.status === 200){
                dispatch(gameActions.resetGame());
                navigate('/jeopardy/dashboard');
            }
        }


        await postHttpRequest(configRequest, applyData);
    };


    return(
        <div className="height101 bg-light-gray">
            <NavBar/>
            <div className="px-2 bg-light-gray">
                <div className={'d-flex p-2'}>
                    <div className={'w-25 me-2 bg-dark-green rounded-3'}>
                        <h2 className={'text-center text-capitalize text-jeopardy-yellow-static-fixed'}>boards</h2>
                        <BoardGameTable/>
                    </div>
                    <div className={'w-75 m-auto border ms-2 overflow-auto bg-dark-green rounded-3'}>
                        <h1 className={'text-center text-jeopardy-yellow bg-dark-green m-auto w-50 rounded-2'}>New Game</h1>
                        <GameForm submit={submitHandler}/>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default NewGameView;