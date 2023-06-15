import React, {useState} from "react";
import SubjectSelect from "./SubjectSelect";
import CategoryQuestions from "./CategoryQuestions";
import {useDispatch} from "react-redux";
import {miscDataActions} from "../store/miscData";


const QuestionsFromCategory = props => {
    const dispatch = useDispatch();
    const [id, setId] = useState("");

    const inputChange =(e)=>{

        const {name, value} = e.target;

        setId(value)

    }

    return(
        <div className={''}>
            <div className={'py-1'}>
                <SubjectSelect
                    name={'subject'}
                    inputChange={inputChange}
                />
            </div>
            <div>
                <CategoryQuestions id={id}
                />
            </div>
        </div>
    )
};

export default QuestionsFromCategory;