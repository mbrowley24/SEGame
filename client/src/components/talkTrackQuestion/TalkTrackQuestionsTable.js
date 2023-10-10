import React from "react";
import TalkTrackQuestionsTableBody from "./TalkTrackQuestionsTableBody";


const TalkTrackQuestionsTable = props => {
    console.log("TalkTrackQuestionsTable");
    const {update} = props;

    return(
        <table className="striped w-75 m-auto bg-green">
            <thead className="border">
                <tr>
                    <th className="border">Question</th>
                    <th className="border">Category</th>
                    <th className="border">Created By</th>
                    <th className="border">Rating</th>
                </tr>
            </thead>
            <TalkTrackQuestionsTableBody update={update}/>
        </table>
    )
};
export default TalkTrackQuestionsTable;