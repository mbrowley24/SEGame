import React, {useCallback, useState, useContext} from "react";
import {useDispatch, useSelector} from "react-redux";
import LobbyListItem from "./lobbyListItem";
import {gameActions} from "../store/gameData";
import SocketContext from "../context/SocketContext";
const LobbyPanel = props => {

    const {game, show} = props;
    const {socket} = useContext(SocketContext);
    const lobbyPersonnel = useSelector(state => state.gameData.lobby);
    const dispatch = useDispatch();
    const [players, setPlayers] = useState([]);

    const resetPlayers = useCallback(() => {
            setPlayers([])}, [players]);

    const inputChange = useCallback((e) => {
        const {value, checked} = e.target;


        if(checked){
            const filteredPlayer = lobbyPersonnel.filter(player => player.username === value);

            const filteredPlayers = players.filter((player) => player.username === filteredPlayer[0].username);

            if(filteredPlayers.length === 0){
                setPlayers([...players, filteredPlayer[0]]);

            }

        }else{
            const playersState = [...players];
            const filteredPlayers = playersState.filter((player) => player.username !== value);
            setPlayers(filteredPlayers);
        }

    }, [players, lobbyPersonnel]);

    const addPlayers = useCallback(() => {

        const playersState = [...players];

        dispatch(gameActions.setPlayers({players:playersState}));
        socket.emit('add_player', {room:game.room, players : playersState, game:game});
        resetPlayers();

    },[players]);

    return(
        show && <div>
            <button
                className={'text-warning btn'}
                disabled={players.length === 0}
                onClick={addPlayers}
            >add players
            </button>
            <ul className={'list-group bg-primary height50 overflow-auto'}>
                {
                    lobbyPersonnel.map((person, i) => {

                        return (
                            <React.Fragment key={i}>
                                <LobbyListItem person={person} inputChange={inputChange} players={players} i={i}/>
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </div>


    )
};
export default LobbyPanel;