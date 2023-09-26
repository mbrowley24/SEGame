import React from "react";
import HostPanelPopOut from "./HostPanelPopOut";
import HostQuitGame from "./HostQuitGame";
import '../css/generalCss.css'
import GameUrl from "./GameUrl";




const HostPanel = props => {
    const {id, game} = props;
    return(
        <div className={'w-10 overflow-auto p-1 '}>
            <HostPanelPopOut id={id} game={game}/>
            <GameUrl game={game}/>
            <HostQuitGame game={game}/>
        </div>
    )
};
export default HostPanel;