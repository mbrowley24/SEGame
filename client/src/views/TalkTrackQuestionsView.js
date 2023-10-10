import React, {useState} from "react";
import NewTalkTrackQuestion from "../components/talkTrackQuestion/NewTalkTrackQuestion";
import TalkTrackQuestionsTable from "../components/talkTrackQuestion/TalkTrackQuestionsTable";
import '../css/generalCss.css'
import NavBar from "../components/NavBar";
import TablePagination from "../components/talkTrackQuestion/TablePagination";

const TalkTrackQuestionsView = props => {
    console.log("questions");
    const {} = props;
    const [newQuestion, setNewQuestion] = useState(false);
    const [update, setUpdate] = useState(false);
    const handleClose = () => setNewQuestion(false);
    const handleShow = () => setNewQuestion(true);

    console.log("TalkTrackQuestionsView");
    return(
        <div className="bg-light-gray height101">
            <div>
                <NavBar/>
            </div>
            <div>
                <h4 className={'text-center text-capitalize p-2 m-auto my-1 p-1 w-50 rounded-3' +
                    ' fw-bolder sticky'}>
                    questions 
                    <div onClick={handleShow} className="d-inline-block clickable" >
                        <i className="material-icons">add_box</i>
                    </div> 
                </h4>
                <div className={'height70 overflow-auto skinny_black_scroll_bar rounded-3'}>
                    <TalkTrackQuestionsTable update={update} />
                    <NewTalkTrackQuestion show={newQuestion} 
                                        setUpdate={setUpdate} 
                                        handleClose={handleClose}/>
                    <TablePagination/>
                </div>
            </div>
        </div>
    )
};
export default TalkTrackQuestionsView;