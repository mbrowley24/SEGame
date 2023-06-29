import React, {useContext, useCallback} from "react";
import {useDispatch} from "react-redux";
import SocketContext from "../context/SocketContext";
import {gameActions} from "../store/gameData";
import PlayerPanelListItem from "./PlayerPanelListItem";

const PlayersPanel = props => {
    const {game, id} = props;
    const dispatch = useDispatch();
    const {socket} = useContext(SocketContext);
    const removePlayer = useCallback((player) => {

        if(id){

            console.log(player);
            dispatch(gameActions.removePlayer(player));

            socket.emit('remove_player', {room:id, player:player});
        }

    },[]);


    return(
        <React.Fragment>


            <ul className={'list-group'}>
                {
                    game.players.map((player, i) => {

                        console.log(player);

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
export default PlayersPanel;