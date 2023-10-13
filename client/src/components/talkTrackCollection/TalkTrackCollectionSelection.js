import React, {useContext, useEffect, useState} from "react";
import TalkTrackContext from "../../context/TalkTrackContext";
import useHttp from "../../hooks/useHttp";
import "../../css/generalCss.css"
import RatingSystem from "../talkTrackDashboard/RatingSystem";

const TalkTrackCollectionSelection = props =>{
    const [questions, setQuestions] = useState([]);
    const {numOfItems, setNumOfItems, page, setPage} = useContext(TalkTrackContext);
    const {getHttpRequest} = useHttp();

    useEffect(() => {

        (async () => {

            const configRequest={

                url: `talktracks/questions/forms/${page}/${numOfItems}`
            
            }

            const applyData = (res) => {
                console.log(res.data.questionResponses);
                setQuestions(res.data.questionResponses);

            };

            await getHttpRequest(configRequest, applyData);
            
        })();

    }, [page, numOfItems]);

    return(
        <React.Fragment>
            {
                questions.map((question, index) => {
                    
                    return(
                        <div className="d-flex m-auto border border-danger" key={index}>
                            <div className="w-10 border border-dark d-flex align-items-center justify-content-center">    
                                <button className="btn-small">add</button>
                            </div>
                            <div className="border p-3 w-100">
                                <p>{question.question}</p>
                            </div>
                            <div>
                                <RatingSystem ratingValue={question.rating}
                                            url={`talktrackcollectionratings/${question.id}`}
                                            id={question.id}/>
                            </div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
};
export default TalkTrackCollectionSelection;