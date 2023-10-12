import React from "react";
import TalkTrackCategory from "./TalkTrackCategory";
import useTalkTrack from "../../hooks/useTalkTrack";
import "../../css/generalCss.css"


const TalkTrackQuestionForm = props => {
    const {submit, inputChange, questionData} = props;
    const {QUESTION_FIELDS, validateQuestion} = useTalkTrack();
    

    return(
        <form onSubmit={submit} className="m-auto rounded-3 bg-dark-green p-3 height40">
            <div className="w-50 m-auto text-center">
                <label>Category</label>
                <TalkTrackCategory 
                    inputChange={inputChange}
                    name={QUESTION_FIELDS.CATEGORY}
                    value={questionData.category}
                    />
            </div>
            <div className=" text-center">
                <label htmlFor="question" className="text-center">Question</label>
                <textarea
                    rows="5"
                    cols="4"
                    name={QUESTION_FIELDS.QUESTION}
                    className=" form-control w-75 m-auto no-resize"
                    id="question"
                    value={questionData.question}
                            onChange={(e)=>inputChange(e)}
                ></textarea>
            </div>
            <div className="text-center my-2">
                <button className="btn-small"
                        disabled={!validateQuestion(questionData)}
                >Submit</button>
            </div>
        </form>
    )
};

export default TalkTrackQuestionForm;