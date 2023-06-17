import React, {useEffect, useState} from "react";
import useHttp from "../hooks/useHttp";
import CategorySelectionTableBodyRow from "./CategorySelectionTableBodyRow";

const CategorySelectionTableBody = props => {
    const {getHttpRequest} = useHttp();
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const controller = new AbortController();

        (async () => {

            const configRequest={
                url: "myCategories/board",
                signal: controller.signal
            }

            const applyData=(res)=>{
                //console.log(res)
                setCategories(res.data)
            }

            await getHttpRequest(configRequest, applyData);

        })()

    }, []);

    return(
        <tbody>
        {
            categories.map((category, index) => {

                return(
                   <CategorySelectionTableBodyRow
                       key={`${index}/${category.id}`}
                       data={category}
                   />
                )
            })
        }
        </tbody>
    )
};

export default CategorySelectionTableBody;