import React, {useState} from "react";
import {RiRewindLine} from "react-icons/ri";
import GamePlayHostPanel from "./GamePlayHostPanel";
import "../css/generalCss.css"


const HostPanelPopOut = props => {
    const {id, game} = props;
    const [expand, setExpand] = useState(false);

    const expandSwitch = () => setExpand(!expand);
    return(
        <div className={expand ?`height60 px-1 me-2 bg-transparent overflow-auto 
                    rounded-2 align-self-start background-Lapis-lazuli`
            : 'm-auto me-2 overflow-auto rounded-2 align-self-start bg-transparent '}
        >
            <div className="mb-2">
                <button className={'btn-small text-light text-size-0 text-capitalize text-center'}
                        onClick={expandSwitch}
                >
                    {expand ? <React.Fragment> Lobby <RiRewindLine/>  </React.Fragment>: <React.Fragment> Lobby ({game.lobby.length})</React.Fragment> }
                </button>
            </div>
            
            <GamePlayHostPanel id={id} game={game} show={expand}/>
        </div>
    )
};
export default HostPanelPopOut;