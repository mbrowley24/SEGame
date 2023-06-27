import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import {FaSadCry} from "react-icons/fa";
import {RiAlarmWarningLine} from "react-icons/ri";
import PlayerPanelListItem from "./PlayerPanelListItem";

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
                                    <React.Fragment key={i}>
                                        <PlayerPanelListItem player={player} i={i} game={game}/>
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