import React, {useState} from "react";
import { Link } from "react-router-dom";
import TalkTrackQuestions from "./TalkTrackQuestions";
import NewTalkTrackQuestion from "../talkTrackQuestion/NewTalkTrackQuestion";

const TalkTrackRow = () => {
    const [newQuestion, setNewQuestion] = useState(false);
    const handleClose = () => setNewQuestion(false);
    const handleShow = () => setNewQuestion(true);

    return(
        <div className={'row p-2  border-dark rounded-3 bg-dark-pink'}>
            <div className={'col border-end rounded'}>
                <h4 className={'text-center text-light text-capitalize p-2 m-auto my-1 p-1 w-50 rounded-3' +
                    ' fw-bolder sticky'}>
                    questions 
                    <button onClick={handleShow} className="" >
                        <i className="material-icons">add_box</i>
                    </button> 
                </h4>
                <div className={'height30 overflow-auto skinny_black_scroll_bar rounded-3'}>
                    <TalkTrackQuestions/>
                    <NewTalkTrackQuestion show={newQuestion} handleClose={handleClose}/>
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