import TalkTrackCollectionTableBody from "./TalkTrackCollectionTableBody";

const TalkTrackCollectionTable = props => {
    const {} = props;

    return(
        <table>
            <thead>
                <tr>
                    <th className="">Name</th>
                    <th className=""># Questions</th>
                    <th className="">Created By</th>
                    <th className="">Rating</th>
                </tr>
            </thead> 
            <TalkTrackCollectionTableBody />
        </table>
    )

};


export default TalkTrackCollectionTable;