import React, {useEffect, useState} from "react";
import useHttp from "../../hooks/useHttp";



const TalkTrackCategory = props => {
    const {inputChange, name, value} = props;
    const {getHttpRequest} = useHttp();
    const [categories, setCategories] = useState([]);

    useEffect(()=>{

        (async ()=>{

            const configRequest = {                                                                                                       
                url: `talktrackcategories`,
            }

            const applyData = (res)=>{
                console.log(res);
                setCategories(res.data);
            };

            await getHttpRequest(configRequest, applyData);

        })();

    },[]);
    
    return(

        <select className="form-select text-center text-uppercase"
                name={name}
                onChange={(e)=>inputChange(e)}
                value={value}
        >
            <option value="" className="text-center">choose a Category</option>
            {
                categories.map((category, idx)=>{
                    return(
                        <option key={idx}
                                value={category.id}
                                className="text-center text-uppercase"
                                >{category.name}</option>
                    )
                })
            }
        </select>
    
        )
};
export default TalkTrackCategory;