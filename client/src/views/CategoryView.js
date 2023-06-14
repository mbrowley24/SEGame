import React, {useCallback, useState} from "react";
import useCategory from "../hooks/useCategory";
import NavBar from "../components/NavBar";
import CategoryForm from "../components/CategoryForm";
import SubjectTable from "../components/SubjectTable";
import QuestionsFromCategory from "../components/QuestionsFromCategory";



const CategoryView = props => {
    const {categoryInitialState} = useCategory();
    const [category, setCategory] = useState(categoryInitialState);

    const inputChange = useCallback((e)=>{
        const {name, value} = e.target;
        console.log(name, value)
        setCategory(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
        console.log(category)
    },[category])

    return(
        <div>
            <NavBar/>
            <div className={'row'}>
                <h1 className={'text-center'}>Category View</h1>
                <div className={'col'}>
                    <CategoryForm
                        category={category}
                        inputChange={inputChange}
                        setCategory={setCategory}
                    />
                </div>
                <div className={'col'}>
                    <QuestionsFromCategory/>
                </div>
            </div>
        </div>
    )
};

export default CategoryView;