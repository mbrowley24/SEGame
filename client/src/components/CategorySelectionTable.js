import React, {useState} from "react";
import CategorySelectionTableHeader from "./CategorySelectionTableHeader";
import CategorySelectionTableBody from "./CategorySelectionTableBody";
import "../css/subjectTable.css"


const CategorySelectionTable = props => {
    const [category, categoryList] = useState([]);

    return(
        <table className={'table tableFixHead border border-dark height100'}>
            <CategorySelectionTableHeader/>
            <CategorySelectionTableBody/>
        </table>
    )
};

export default CategorySelectionTable;