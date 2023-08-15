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
                navigate('/dashboard');
            }
     }


     await postHttpRequest(configRequest, applyData);
 };


    return(
        <div>
            <NavBar/>
            <div className={'container height875px'}>
                <div className={'d-flex'}>
                    <div className={'w-25 me-2'}>
                        <h2 className={'text-center text-capitalize text-jeopardy-yellow'}>boards</h2>
                        <BoardGameTable/>
                    </div>
                    <div className={'w-75 m-auto border ms-2 height800px overflow-auto'}>
                        <h1 className={'text-center text-jeopardy-yellow background-jeopardy m-auto w-50 rounded-2'}>New Game</h1>
                        <GameForm submit={submitHandler}/>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default NewGameView;