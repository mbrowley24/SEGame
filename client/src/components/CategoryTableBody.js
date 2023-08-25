import React, {useEffect, useState} from "react";
import useHttp from "../hooks/useHttp";
import CategoryTableBodyRow from "./CategoryTableBodyRow";


const CategoryTableBody = props => {
    const [categories, setCategories] = useState([]);
    const {getHttpRequest}= useHttp();



    useEffect(() => {

        const controller = new AbortController();
        console.log('CategoryTableBody useEffect');
        (async () => {

            const configRequest={
                url:'myCategories',
                signal: controller.signal,
            }

            const applyData = (res)=>{

                setCategories(res.data)
            }

            await getHttpRequest(configRequest, applyData);

        })();

    },[])

    console.log(categories)

    return(
        <tbody>

            {categories.map((category, index) => {
                return(
                    <CategoryTableBodyRow key={index} category={category} setCategories={setCategories}/>
                )
                })
            }
        </tbody>
    )
};

export default CategoryTableBody;