import React, {useCallback, useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import CategoryForm from "../components/CategoryForm";
import QuestionsFromCategory from "../components/QuestionsFromCategory";
import useCategory from "../hooks/useCategory";
import useHttp from "../hooks/useHttp";
import {useParams, useNavigate} from "react-router-dom";

const CategoryEditView = props => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {categoryInitialState, categoryInputRegex} = useCategory();
    const [category, setCategory] = useState(categoryInitialState);
    const {getHttpRequest,putHttpRequest} = useHttp();

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


    useEffect(() => {

        const controller = new AbortController();

        (async () => {

                const configRequest={
                    url:`myCategories/${id}`,
                    signal: controller.signal,
                }

                const applyData = (res)=>{
                    console.log(res.data);
                    setCategory(res.data)
                }

                await getHttpRequest(configRequest, applyData);
        })();

        return () => {
            controller.abort();
        };

    }, [id]);

    const submit = async (e) =>{
        e.preventDefault();
        console.log(category);
        const configRequest={
            url: `myCategories/${id}`,
            data: category
        }

        const applyData = (res)=>{
            console.log(res);
            navigate('/dashboard');

        }

        await putHttpRequest(configRequest, applyData);

    };



    return(
        <div>
            <NavBar/>
            <h1 className={'text-center py-2 my-2'}>Category View</h1>
            <div className={'d-flex justify-content-center'}>
                <div className={'w-25 p-2 m-2'}>
                    <CategoryForm
                        submit={submit}
                        category={category}
                        inputChange={inputChange}
                        setCategory={setCategory}
                    />
                </div>
                <div className={'w-25 p-2 m-2'}>
                    <QuestionsFromCategory/>
                </div>
            </div>
        </div>
    )
};

export default CategoryEditView;