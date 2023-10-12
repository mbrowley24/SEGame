import React from "react";
import NavBar from "../components/NavBar";
import TalkTrackCollectionSelection from "../components/talkTrackCollection/TalkTrackCollectionSelection";
import '../css/generalCss.css'



const NewTalkTrackView = props =>{

    return(
        <div className="bg-light-gray height101">
            <NavBar/>
            <div className="d-flex border">
                <div>
                    
                </div>
                <div className="w-50">
                    <TalkTrackCollectionSelection/>
                </div>
            </div>
        </div>
    )
};
export default NewTalkTrackView;