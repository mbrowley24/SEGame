import React from "react";





const QuestionAnswerToolTip = props => {
    const {data} = props;
    return(
        <div className={'m-auto border w-100 border-light border'}>
            <div className={'p-1'}>
                <h6 className={'text-capitalize fw-bold'}>question:</h6>
                <p className={'text-small'}>{data.question}</p>
            </div>
            <div className={'p-1'}>
                <h6 className={'text-capitalize fw-bold'}>answer:</h6>
                <p className={'text-small'}>{data.answer}</p>
            </div>
        </div>
    )
};
export default QuestionAnswerToolTip;