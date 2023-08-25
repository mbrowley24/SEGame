import React, {useState} from "react";
import {Link} from "react-router-dom";
import DeleteCategoryModal from "./DeleteCategoryModal";
import {RiDeleteBin6Fill} from "react-icons/ri";





const CategoryTableHeader = props => {
    const {category, setCategories} = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <tr>

            <td className={'text-capitalize text-center'}>
                <Link to={`/categories/${category.id}`}
                      className={'text-jeopardy-yellow'}
                >{category.name}</Link>
            </td>
            <td className={'text-capitalize text-center text-jeopardy-yellow '}>
                {category.created_by}
            </td>
            <td className={'text-capitalize text-center text-jeopardy-yellow'}>
                <DeleteCategoryModal show={show} handleClose={handleClose}
                                     category={category} setCategories={setCategories}
                />
                <button className={'btn btn-sm btn-danger'} onClick={handleShow}><RiDeleteBin6Fill/></button>
            </td>
        </tr>
    )
};

export default CategoryTableHeader;