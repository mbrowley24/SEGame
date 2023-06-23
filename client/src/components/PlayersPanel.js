import React, {useMemo} from "react";
import useGame from "../hooks/useGame";



const PlayersPanel = props => {
    const {game} = props;
    const {getPlayers} = useGame();
    const players = useMemo(() => getPlayers(game.players), [game.players]);


    return(
        <React.Fragment>


            <ul className={'list-group'}>
                {
                    players.map((player, i) => {



                        return(

                                player.name.length > 0?
                                    <li key={i} className={'list-group-item'}>
                                        {`${player.name} - ${player.score}`}
                                    </li>
                                    : null
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
};
export default PlayersPanel;