import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import useHttp from "../hooks/useHttp";


const CategoryTableBody = props => {
    const [categories, setCategories] = useState([]);
    const {getHttpRequest}= useHttp();

    useEffect(() => {

        const controller = new AbortController();

        (async () => {

            const configRequest={
                url:'myCategories',
                signal: controller.signal,
            }

            const applyData = (res)=>{
                console.log(res.data);
                setCategories(res.data)
            }

            await getHttpRequest(configRequest, applyData);

        })();

    },[])

    return(
        <tbody>

            {categories.map((category, index) => {
                console.log(category);
                return(
                    <tr key={index}>

                        <td className={'text-capitalize text-center'}>
                            <Link to={`/categories/${category.id}`}>{category.name}</Link></td>
                    </tr>
                )
                })
            }
        </tbody>
    )
};

export default CategoryTableBody;