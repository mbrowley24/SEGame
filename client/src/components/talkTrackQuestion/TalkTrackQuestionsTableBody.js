import React, {useContext, useEffect, useState} from "react";
import useHttp from "../../hooks/useHttp";
import RatingSystem from "../talkTrackDashboard/RatingSystem";
import QuestionTablePaginationContext from "../../context/QuestionContext";


const TalkTrackQuestionsTableBody = props => {
    const {update} = props;
    const {getHttpRequest, isLoading} = useHttp();
    const {questionState, setQuestionState} = useContext(QuestionTablePaginationContext);

    
    useEffect(() => {

        (async () => {
            
            const configRequest = {
                url: `talktracks/${0}/${10}`,
            };

            const applyData = (res) => {
                
                if(res.status === 200){
                    setQuestionState((prevState) => {
                    
                        return{
                            ...prevState,
                            questions: res.data.questionResponses,
                            page: res.data.page,
                            totalPages: res.data.totalPages,
                            firstPage: res.data.firstPage,
                            lastPage: res.data.lastPage, 
                        }
                    });

                    
                }
                
            };

            await getHttpRequest(configRequest, applyData);
        })();

        return () => {};

    }, [update]);

    // console.log(questionState);
    return(
        <React.Fragment>
            <tbody>
                {
                    questionState.questions.length > 0 &&
                    questionState.questions.map((talktrack, index) => {
                        return(
                            <tr key={index} className="">
                                <td className="text-center text-truncate">{talktrack.question}</td>
                                <td className="text-center text-uppercase">{talktrack.category}</td>
                                <td className="text-center">{talktrack.created_by}</td>
                                <td colSpan={1} className="text-center">
                                    <RatingSystem id={talktrack.id}  ratingValue={talktrack.rating}/>
                                </td>
                            </tr>
                        )
                    })
                }
                {
                    isLoading &&
                    <tr>
                        <td colSpan={4} className="text-center">
                            Loading...
                        </td>
                    </tr>
                }
                {
                    questionState.questions.length === 0 && !isLoading &&
                    <tr>
                        <td colSpan={4} className="text-center">
                            No Questions
                        </td>
                    </tr>
                }
            </tbody>
            
        </React.Fragment>
        
        
    )
};
export default TalkTrackQuestionsTableBody;