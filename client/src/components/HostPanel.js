import React from "react";
import HostPanelPopOut from "./HostPanelPopOut";
import HostQuitGame from "./HostQuitGame";
import '../css/generalCss.css'




const HostPanel = props => {
    const {id, game} = props;
    return(
        <div className={'w-10 overflow-auto p-1'}>
            <HostPanelPopOut id={id} game={game}/>
            <HostQuitGame game={game}/>
        </div>
    )
};
export default HostPanel;