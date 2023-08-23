import React, {useEffect} from "react";
import useHttp from "../hooks/useHttp";
import {useDispatch, useSelector} from "react-redux";
import NavBar from "../components/NavBar";
import {gameActions} from "../store/gameData";
import GameBoard from "../components/GameBoard";
import {useParams} from "react-router-dom";
import StartGameButton from "../components/StartGameButton";
import "../css/generalCss.css"

const StartGameView = props => {
    const {id} = useParams();
    const {getHttpRequest} = useHttp();
    const dispatch = useDispatch();
    const game = useSelector(state => state.gameData);

    useEffect(()=>{

        const controller = new AbortController();

        (async () => {

            const configRequest={
                url:`game/${id}`,
                signal: controller.signal,
            }

            const applyData = (res) => {

                if(res.status === 200){
                    console.log(res.data);
                    dispatch(gameActions.setBoard(res.data));
                }

            };

            await getHttpRequest(configRequest, applyData);


        })();

        return () => {
            controller.abort();
        }


    },[]);


    return(
        <div className={'background-jeopardy height925px overflow-hidden'}>
            <NavBar/>
            <div className={'w-75 m-auto mt-3 py-2 complement-board-bg border border-dark rounded height800px overflow-auto '}>
                <h1 className={'text-capitalize text-jeopardy-yellow py-1 my-2'}> game: {game.name}</h1>
                <GameBoard data={game.board}/>
                <div>
                    <StartGameButton game={game} id={id}/>
                </div>
            </div>
        </div>
    )
};
export default StartGameView;