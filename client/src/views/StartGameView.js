import React, {useEffect} from "react";
import useHttp from "../hooks/useHttp";
import {useDispatch, useSelector} from "react-redux";
import NavBar from "../components/NavBar";
import {gameActions} from "../store/gameData";
import GameBoard from "../components/GameBoard";
import {useParams} from "react-router-dom";
import StartGameButton from "../components/StartGameButton";

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
                    //console.log(res.data);
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
        <div>
            <NavBar/>
            <div className={'w-75 m-auto'}>
                <h1>Start Game</h1>
                <h6 className={'text-capitalize'}> game: {game.name}</h6>
                <GameBoard data={game.board}/>
                <div>
                    <StartGameButton game={game} id={id}/>
                </div>
            </div>
        </div>
    )
};
export default StartGameView;