import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import {FaSadCry} from "react-icons/fa";
import {RiAlarmWarningLine} from "react-icons/ri";
import useGame from "../hooks/useGame";
import {GiBootKick} from "react-icons/gi"

const PlayerPanelListItem = props => {
    const {player, i, game, remove} = props;
    const {playerPanelCss} = useGame();
    const attempts = useSelector(state => state.qAndAData.attempted_by);
    const attempted = useMemo(() => attempts.includes(player.username), [attempts, player]);
    const buzzed = useMemo(() => game.buzzer.player === player.username, [game.buzzer, player]);
    const myData = useSelector(state => state.playerData);
    const me = useMemo(() => myData.username === player.username, [game.buzzer, myData]);
    const playerCss = useMemo(() => playerPanelCss(buzzed, attempted), [buzzed, attempted]);
    const isHost = useMemo(() => game.host.username === myData.username, [game.host, myData]);



    return(
        <li key={player.username} className={playerCss}>

            {buzzed &&  <RiAlarmWarningLine color={'red'}/>}
            <span className={'w-50 fs-4 text-jeopardy-yellow-static text-capitalize fw-bold'}
                >{player.name.length > 10?`${player.name}`: `${player.name.substring(0, 10)} : ${player.score}`}
            </span>
            <small className={'text-jeopardy-orange'}>{me && ' ( you )'}</small>
            {attempted && <FaSadCry/>}
            {/*{*/}
            {/*    isHost &&*/}
            {/*    <button*/}
            {/*        className={'btn btn-sm float-end text-jeopardy-yellow-static'}*/}
            {/*        onClick={()=>remove(player)}*/}
            {/*    >{<GiBootKick/>}</button>*/}
            {/*}*/}
        </li>
    )
};


export default PlayerPanelListItem;