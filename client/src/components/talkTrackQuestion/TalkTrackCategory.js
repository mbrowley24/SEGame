import React, {useEffect, useState} from "react";
import useHttp from "../../hooks/useHttp";



const TalkTrackCategory = props => {
    const {inputChange, name} = props;
    const {getHttpRequest} = useHttp();
    const [categories, setCategories] = useState([{id:"2", name:"name"}]);

    useEffect(()=>{

        (async ()=>{

            const configRequest = {                                                                                                       
                url: `talktrackcategories`,
            }

            const applyData = (res)=>{
                console.log(res);
            };

            await getHttpRequest(configRequest, applyData);

        })();

    },[]);
    
    return(

        <select className="form-select">
            <option value="">Select a Category</option>
            {
                categories.map((category, idx)=>{
                    return(
                        <option key={idx} value={category.id}>{category.name}</option>
                    )
                })
            }
        </select>
    
        )
};
export default TalkTrackCategory;