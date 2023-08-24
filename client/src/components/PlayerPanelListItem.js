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
    const playerCss = useMemo(() => playerPanelCss(buzzed, attempted, me), [buzzed, attempted]);




    return(
        <div key={player.username} className={playerCss}>
            <p className={'text-dark bg-light border border-dark rounded w-75 m-auto p-1 fw-bold'}>{`$ ${player.score}`}</p>
            <h6 className={'text-light text-capitalize fw-bolder w-10 background-jeopardy m-auto w-75 border border-dark rounded p-1'}>
                {player.name.length < 10?`${player.name}`: `${player.name.substring(0, 5)}...`}
            </h6>

            <div className={'height5'}>
                {buzzed &&  <RiAlarmWarningLine color={'red'}/>}
                {attempted && <FaSadCry/>}
            </div>

            {/*<span className={'w-50 fs-4 text-jeopardy-yellow-static text-capitalize fw-bold'}>*/}
            {/*    {player.name.length > 10?`${player.name}`: `${player.name.substring(0, 10)} : ${player.score}`}*/}
            {/*</span>*/}

            {/*{*/}
            {/*    isHost &&*/}
            {/*    <button*/}
            {/*        className={'btn btn-sm float-end text-jeopardy-yellow-static'}*/}
            {/*        onClick={()=>remove(player)}*/}
            {/*    >{<GiBootKick/>}</button>*/}
            {/*}*/}
        </div>
    )
};


export default PlayerPanelListItem;