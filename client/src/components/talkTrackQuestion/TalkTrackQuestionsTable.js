import React, {useContext} from "react";
import TalkTrackQuestionsTableBody from "./TalkTrackQuestionsTableBody";
import QuestionContext from "../../context/QuestionContext";
import TalkTrackTableCategoryHeader from "./TalkTrackTableCategoryHeader";
import TalkTrackTableCreatedByHeader from "./TalkTrackTableCreatedByHeader";
import TalkTrackRatingHeader from "./TalkTrackTableRatingHeader";
import TalkTrackTableQuestionHeader from "./TalkTrackTableQuestionHeader";

const TalkTrackQuestionsTable = props => {
    const {update} = props;
    const {questionState, setQuestionState} = useContext(QuestionContext);

    return(
        <table className="striped w-75 m-auto bg-green">
            <thead className="border">
                <tr>
                    <TalkTrackTableQuestionHeader/>
                    <TalkTrackTableCategoryHeader/>
                    <TalkTrackTableCreatedByHeader/>
                    <TalkTrackRatingHeader/>
                </tr>
            </thead>
            <TalkTrackQuestionsTableBody update={update}/>
        </table>
    )
};
export default TalkTrackQuestionsTable;