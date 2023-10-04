import React from "react";




const TalkTrackQuestion = props => {
    const {talktrack, inputChange} = props;

    return(
        <div className="">
            <div>
                <p className="">{talktrack.question}</p>
                <div>
                    <RatingSystem id={talktrack.id}/>
                </div>
            </div>
            <div className="">
                <p>{`Created By: ${talktrack.createdBy}`}</p>
            </div>
        </div>
    )
};

export default TalkTrackQuestion