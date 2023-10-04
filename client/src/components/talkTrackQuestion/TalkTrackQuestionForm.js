import React from "react";
import TalkTrackCategory from "./TalkTrackCategory";
import useTalkTrack from "../../hooks/useTalkTrack";


const TalkTrackQuestionForm = props => {
    const {submit, inputChange} = props;
    const {QUESTION_FIELDS} = useTalkTrack();
    
    return(
        <form onSubmit={submit} className="w-25 m-auto rounded-3 bg-dark-green p-3">
            <div className=" input-field border border-danger w-50 m-auto">
                <TalkTrackCategory inputChange={inputChange} name={QUESTION_FIELDS.CATEGORY} />
            </div>
            <div className="form-group">
                <label htmlFor="question">Question</label>
                <textarea name={QUESTION_FIELDS.QUESTION}
                            className="form-control w-75 m-auto"
                            id="question"
                            cols="30"
                            rows="10"
                            onChange={(e)=>inputChange(e)}
                ></textarea>
            </div>
            <div>
                <button className="btn-small">Submit</button>
            </div>
        </form>
    )
};

export default TalkTrackQuestionForm;