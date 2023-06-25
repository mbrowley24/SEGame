import React, {useMemo} from "react";
import useGame from "../hooks/useGame";



const PlayersPanel = props => {
    const {game} = props;



    return(
        <React.Fragment>


            <ul className={'list-group'}>
                {
                    game.players.map((player, i) => {

                        console.log(player);

                        return(

                                player.name.length > 0?
                                    <li key={i} className={'list-group-item'}>
                                        {`${player.name} : ${player.score}`}
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