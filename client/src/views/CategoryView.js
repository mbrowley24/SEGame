import React, {useCallback, useState} from "react";
import useCategory from "../hooks/useCategory";
import NavBar from "../components/NavBar";
import CategoryForm from "../components/CategoryForm";
import QuestionsFromCategory from "../components/QuestionsFromCategory";
import useHttp from "../hooks/useHttp";
import {useNavigate} from "react-router-dom";

const CategoryView = props => {
    const navigate = useNavigate();
    const {categoryInitialState, categoryInputRegex} = useCategory();
    const [category, setCategory] = useState(categoryInitialState);
    const {postHttpRequest} = useHttp();

    const inputChange = useCallback((e)=>{
        const {name, value} = e.target;
        if(categoryInputRegex(value)){
            setCategory(prevState => {
                return {
                    ...prevState,
                    [name]: value
                }
            })
        }

    },[category])

    const submit = async (e) =>{
        e.preventDefault();

        const configRequest={
            url: 'myCategories',
            data: category
        }

        const applyData = (res)=>{
            console.log(res);
            setCategory(categoryInitialState);
            navigate('/dashboard');

        }

        await postHttpRequest(configRequest, applyData);

    };


    return(
        <div>
            <NavBar/>
            <h1 className={'text-center py-2 my-2'}>Category View</h1>
            <div className={'d-flex justify-content-center'}>
                <div className={'w-25 p-2 m-2 bg-secondary border-2 rounded-2'}>
                    <CategoryForm
                        submit={submit}
                        category={category}
                        inputChange={inputChange}
                        setCategory={setCategory}
                    />
                </div>
                <div className={'w-25 p-2 m-2 bg-secondary border-2 rounded-2'}>
                    <QuestionsFromCategory/>
                </div>
            </div>
        </div>
    )
};

export default CategoryView;