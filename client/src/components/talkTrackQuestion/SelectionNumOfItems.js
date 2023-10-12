import React, {useContext, useEffect} from "react";
import QuestionContect from "../../context/QuestionContext";
import useHttp from "../../hooks/useHttp";
import "../../css/generalCss.css"
import { useDispatch } from "react-redux";



const SelectionNumOfItems = props => {
    const {update} = props;

    const {numOfItems, setNumOfItems, questionState, 
            setQuestionState, page, setPage
        } = useContext(QuestionContect);

    const {getHttpRequest} = useHttp();

    const inputChange = e => {
        const {value} = e.target;
        setNumOfItems(Number(value));
    };

    useEffect(() => {

        console.log(numOfItems);
        (async () => {
            
            const configRequest = {
                url: `talktracks/${page}/${numOfItems}`,
            };

            const applyData = (res) => {
                
                if(res.status === 200){
                    setQuestionState((prevState) => {
                    
                        return{
                            ...prevState,
                            questions: res.data.questionResponses,
                            page: res.data.page,
                            totalPages: res.data.totalPages,
                            firstPage: res.data.firstPage,
                            lastPage: res.data.lastPage, 
                        }
                    });

                    
                }
                
            };

            await getHttpRequest(configRequest, applyData);
        })();

        return () => {};

    }, [numOfItems, update, page]);


    return(
        <select className="browser-default drop-down w-50 ms-auto text-size-05 rounded-3"
                name="items"
                onChange={(e)=> inputChange(e)}>
            <option className="text-size-05" value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
    )
};
export default SelectionNumOfItems;