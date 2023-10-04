import React from 'react';
import NavBar from '../components/NavBar';
import TalkTrackRow from '../components/talkTrackDashboard/TalkTrackRow';
import "../css/generalCss.css"


const TalkTrackDashboard = () => {
    return(
        <div className='bg-light-gray'>
            <NavBar/>
            <div>
                <h1>TalkTrack Overview</h1>
                <TalkTrackRow/>
            </div>
        </div>
    )
};

export default TalkTrackDashboard;