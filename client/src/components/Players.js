import React, {useState} from "react";
import {useSelector} from "react-redux";


const Player = props =>{
    const players = useSelector(state => state.gameData.players);
    const [playerKeys] = useState(Object.keys(players));

    return(
        <ul className={'list-group'}>
            {
                playerKeys.map((key, index) => {

                    return(
                        players[key].name.length > 0 &&
                        <li key={index} className={'list-group-item'}>
                            {players[key].name}
                            <span> className={'badge badge-primary badge-pill'}>{players[key].score}</span>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default Player;