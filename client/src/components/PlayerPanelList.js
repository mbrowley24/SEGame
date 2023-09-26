import React, {useCallback, useEffect, useMemo, useState} from "react";
import PlayerPanelListItem from "./PlayerPanelListItem";
import {gameActions} from "../store/gameData";
import {useDispatch} from "react-redux";
import "../css/playerPanelCss.css"



const PlayerPanelList = props => {
    const {game, socket} = props;
    const dispatch = useDispatch();

    const removePlayer = useCallback((player) => {

            dispatch(gameActions.removePlayer(player.username));
            socket.emit('remove_player', {room: game.room, player: player});

            },[game]);

    return(
        <React.Fragment>
            <div className={'w-75 my-2 m-auto overflow-auto'}>
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
            </div>
        </React.Fragment>
    )
};
export default PlayerPanelList;