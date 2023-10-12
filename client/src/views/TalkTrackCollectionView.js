import React from "react";
import NavBar from "../components/NavBar";
import TalkTrackCollectionTable from "../components/talkTrackCollection/TalkTrackCollectionTable";
import { Link } from "react-router-dom";




const TalkTrackCollectionView = props =>{

    return(
        <div>
            <NavBar/>
            <div className="w-75 my-3 m-auto">
                <h4 className={'text-center text-capitalize p-2 m-auto my-1 p-1 w-50 rounded-3' +
                    ' fw-bolder sticky'}>
                        talk tracks 
                    <div className="d-inline-block" >
                        <Link to={'/talktrack/collections/new'}><i className="material-icons">add_box</i></Link>
                    </div> 
                </h4>
                <TalkTrackCollectionTable/>
            </div>
        </div>
    )
}

export default TalkTrackCollectionView;