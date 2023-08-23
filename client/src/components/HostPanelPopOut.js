import React, {useState} from "react";
import {RiRewindLine, RiSpeedLine} from "react-icons/ri";
import GamePlayHostPanel from "./GamePlayHostPanel";



const HostPanelPopOut = props => {
    const {id, game} = props;
    const [expand, setExpand] = useState(false);

    const expandSwitch = () => setExpand(!expand);
    return(
        <div className={expand ?`w-10 height60 px-1 me-2 border border-dark overflow-auto 
                    rounded-2 align-self-start background-Lapis-lazuli`
            : ' px-1 me-2 border border-dark overflow-auto rounded-2 align-self-start background-Lapis-lazuli'}
        >
            <div className={'text-end'}>
                <button className={'btn text-jeopardy-yellow text-capitalize btn-link '}
                      onClick={expandSwitch}
                >
                    {expand ? <RiRewindLine/> : <RiSpeedLine/> }
                </button>
            </div>
            <GamePlayHostPanel id={id} game={game} show={expand}/>
        </div>
    )
};
export default HostPanelPopOut;