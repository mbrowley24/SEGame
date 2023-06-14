import React, {useState} from "react";
import SubjectSelect from "./SubjectSelect";
import CategoryQuestions from "./CategoryQuestions";




const QuestionsFromCategory = props => {
    const [id, setId] = useState('');
    const inputChange =(e)=>{
        setId(e.target.value)
    }

    return(
        <div>
            <div>
                <SubjectSelect
                    name={'subject'}
                    inputChange={inputChange}
                />
            </div>
            <div>
                <CategoryQuestions id={id}/>
            </div>
        </div>
    )
};

export default QuestionsFromCategory;