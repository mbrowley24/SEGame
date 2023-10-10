import React, {useContext, useState} from "react";
import QuestionContext from "../../context/QuestionContext";



const TalkTrackTableQuestionHeader = props =>{

    const {} = props;
    const {questionState, setQuestionState} = useContext(QuestionContext);
    const [isAsc, setIsAsc] = useState(false);

    const handleSortAsc = (a, b) => {

        if(a.question < b.question){ return -1}
        if(a.question > b.question){ return 1 }

        return 0
    };

    const handleSortDesc = (a, b) => {

        if(a.question < b.question){ return 1}
        if(a.question > b.question){ return -1 }

        return 0
    };

    const assendingSort = () => {
        
        setQuestionState((prevState) => {
            return{
                ...prevState,
                questions: prevState.questions.sort(handleSortAsc)
            }
        })
        setIsAsc(false);
    };


    const descendingSort = () => {
        setQuestionState((prevState) => {
            return{
                ...prevState,
                questions: prevState.questions.sort(handleSortDesc)
            }
        })
        setIsAsc(true);
    };

    return(
        <th className="border">
            Question
            {isAsc && <i className="material-icons clickable" onClick={assendingSort}>arrow_drop_down</i>}
            {!isAsc && <i className="material-icons clickable" onClick={descendingSort}>arrow_drop_up</i>}
        </th>
        
    )
};
export default TalkTrackTableQuestionHeader;