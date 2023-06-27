import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import {FaSadCry} from "react-icons/fa";
import {RiAlarmWarningLine} from "react-icons/ri";
import useGame from "../hooks/useGame";

const PlayerPanelListItem = props => {
    const {player, i, game } = props;
    const {playerPanelCss} = useGame();
    const attempts = useSelector(state => state.qAndAData.attempted_by);
    const attempted = useMemo(() => attempts.includes(player.username), [attempts, player]);
    const buzzed = useMemo(() => game.buzzer.player === player.username, [game.buzzer, player]);
    const myData = useSelector(state => state.playerData);
    const me = useMemo(() => myData.username === player.username, [game.buzzer, myData]);
    const playerCss = useMemo(() => playerPanelCss(buzzed, attempted), [buzzed, attempted]);

    return(
        <li key={player.username} className={playerCss}>

            {buzzed &&  <RiAlarmWarningLine/>}
            <span className={'text-capitalize'}>{` ${player.name}`}</span> {`: ${player.score}`}
            <small>{me && '(you)'}</small>
            {attempted && <FaSadCry/>}
        </li>
    )
};


export default PlayerPanelListItem;