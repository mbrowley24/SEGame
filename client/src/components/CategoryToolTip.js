import React from "react";
import QuestionAnswerToolTip from "./QuestionAnswerToolTip";



const CategoryToolTip = props => {
    const {data} = props;
    return(
        <div>
            <QuestionAnswerToolTip data={data[200]}/>
            <QuestionAnswerToolTip data={data[400]}/>
            <QuestionAnswerToolTip data={data[600]}/>
            <QuestionAnswerToolTip data={data[800]}/>
            <QuestionAnswerToolTip data={data[1000]}/>
        </div>

    )
}


export default CategoryToolTip;