import React from "react";
import TalkTrackQuestionsTable from "./TalkTrackQuestionsTable";
import { Link } from "react-router-dom";

const TalkTrackRow = () => {

    return(
        <div className={'row p-2  border-dark rounded-3 bg-dark-pink'}>
            <div className={'col border-end rounded'}>
                <h4 className={'text-center text-light text-capitalize p-2 m-auto my-1 p-1 w-50 rounded-3' +
                    ' fw-bolder sticky'}>
                    question
                </h4>
                <div className={'height30 overflow-auto skinny_black_scroll_bar rounded-3'}>
                    <TalkTrackQuestionsTable/>
                </div>
            </div>
            <div className={'col border-start border-dark'}>
                <h4 className={'text-center text-light text-capitalize p-2 m-auto my-1 p-1 w-50 rounded-3' +
                    ' fw-bolder sticky'}>
                    Talk Tracks
                    <Link className={'ms-1'} to={'/jeopardy/categories'}>
                        
                    </Link>
                </h4>
                <div className={'height30 overflow-auto  rounded-3'}>
                    
                </div>
            </div>
        </div>
    )
};
export default TalkTrackRow;