import React, {useCallback, useEffect, useMemo, useState} from "react";
import PlayerPanelListItem from "./PlayerPanelListItem";
import {gameActions} from "../store/gameData";
import {useDispatch} from "react-redux";
import useGame from "../hooks/useGame";



const PlayerPanelList = props => {
    const {game, id, socket, myData, isHost} = props;
    const [hostTimer, setHostTimer] = useState(false);
    const dispatch = useDispatch();
    const {inGame} = useGame();

    const removePlayer = useCallback((player) => {

        if(id){

            dispatch(gameActions.removePlayer(player));

            socket.emit('remove_player', {room:id, player:player});
        }

    },[]);

    useEffect(() => {
        const timer = setTimeout(() => {

            if(!isHost){

                dispatch(gameActions.addLobby(myData));
                socket.emit('player_in_lobby', {room: id, player : myData});
                setHostTimer((timer)=> !timer);


            }

        }, 20000);

        return () => {
            clearTimeout(timer);
        };

    }, [hostTimer, socket, isHost, game]);

    return(
        <React.Fragment>
            <ul className={'list-group w-75 my-2 m-auto'}>
                {
                    game.players.map((player, i) => {


                        return(

                            player.name.length > 0?
                                <React.Fragment key={i}>
                                    <PlayerPanelListItem player={player} i={i} remove={removePlayer} game={game}/>
                                </React.Fragment>

                                : null
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
};
export default PlayerPanelList;