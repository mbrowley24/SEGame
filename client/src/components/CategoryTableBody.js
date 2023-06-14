import React, {useEffect, useState} from "react";
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

                console.log(res);
            }

            await getHttpRequest(configRequest, applyData);

        })();

    },[])

    return(
        <tbody>

        </tbody>
    )
};

export default CategoryTableBody;