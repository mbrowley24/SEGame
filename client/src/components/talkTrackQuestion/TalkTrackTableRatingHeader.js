import React, {useContext, useState} from "react";
import QuestionContext from "../../context/QuestionContext";



const TalkTrackRatingHeader = props => {
    const {} = props;
    const {setQuestionState} = useContext(QuestionContext);
    const [isAsc, setIsAsc] = useState(false);

    

    const assendingSort = () => {
        
        setQuestionState((prevState) => {
            return{
                ...prevState,
                questions: prevState.questions.sort((a,b) => a.rating - b.rating)
            }
        })
        setIsAsc(false);
    };

    const descendingSort = () => {
        
        setQuestionState((prevState) => {
            return{
                ...prevState,
                questions: prevState.questions.sort((a,b)=> b.rating - a.rating)
            }
        })
        setIsAsc(true);
    };

    return(
        <th className="border">
            Rating
            {isAsc && <i className="material-icons clickable" onClick={assendingSort}>arrow_drop_down</i>}
            {!isAsc && <i className="material-icons clickable" onClick={descendingSort}>arrow_drop_up</i>}
        </th>
    )
};
export default TalkTrackRatingHeader;