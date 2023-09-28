import React from "react";
import TalkTrackTableBody from "./TalkTrackTableBody";



const TalkTrackQuestionsTable = () => {

    return(
        <table>
            <thead>
                <tr>
                    <th>Question</th>
                    <th>Rating</th>
                    <th>Created By</th>
                    <th>Feed Back</th>
                </tr>
            </thead>
            <TalkTrackTableBody />
        </table>
    )
};

export default TalkTrackQuestionsTable;