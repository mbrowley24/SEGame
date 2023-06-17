import React, {useState} from "react";
import CategorySelectionTableHeader from "./CategorySelectionTableHeader";
import CategorySelectionTableBody from "./CategorySelectionTableBody";



const CategorySelectionTable = props => {
    const [category, categoryList] = useState([]);

    return(
        <table className={'table border border-danger height100'}>
            <CategorySelectionTableHeader/>
            <CategorySelectionTableBody/>
        </table>
    )
};

export default CategorySelectionTable;