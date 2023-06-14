import React from "react";
import CategoryTableHeader from "./CategoryTableHeader";
import "../css/subjectTable.css";
import CategoryTableBody from "./CategoryTableBody";

const CategoryTable = props => {


    return(
        <table className={'table tableFixHead'}>
            <CategoryTableHeader/>
            <CategoryTableBody/>
        </table>
    )
};

export default CategoryTable;