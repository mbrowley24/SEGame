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

                setCategories(res.data)
            }

            await getHttpRequest(configRequest, applyData);

        })();

    },[])

    return(
        <tbody>

            {categories.map((category, index) => {
                return(
                    <tr key={index}>

                        <td className={'text-capitalize text-center'}>
                            <Link to={`/categories/${category.id}`}
                                  className={'text-jeopardy-yellow'}
                            >{category.name}</Link>
                        </td>
                        <td className={'text-capitalize text-center text-jeopardy-yellow '}>
                            {category.created_by}
                        </td>
                    </tr>
                )
                })
            }
        </tbody>
    )
};

export default CategoryTableBody;