import React, {useContext} from "react";
import QuestionContect from "../../context/QuestionContext";
import "../../css/generalCss.css"



const SelectionNumOfItems = props => {
    const {} = props;
    const {numOfItems, setNumOfItems} = useContext(QuestionContect);

    const inputChange = e => {
        const {value} = e.target;
        setNumOfItems(Number(value));
    };

    return(
        <select className="browser-default drop-down w-50 ms-auto text-size-05 rounded-3"
                name="items"
                onChange={(e)=> inputChange(e)}>
            <option className="text-size-05" value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
    )
};
export default SelectionNumOfItems;