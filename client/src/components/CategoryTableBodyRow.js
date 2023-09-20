import React, {useState} from "react";
import {Link} from "react-router-dom";
import DeleteCategoryModal from "./DeleteCategoryModal";
import '../css/generalCss.css'





const CategoryTableHeader = props => {
    const {category, setCategories} = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <tr>

            <td className={'text-capitalize text-center'}>
                <Link to={`/jeopardy/categories/${category.id}`}
                    className={'text-capitalize text-dark'}
                >{category.name}</Link>
            </td>
            <td className={'text-capitalize text-center text-capitalize text-dark '}>
                {category.created_by}
            </td>
            <td className={'text-capitalize text-center text-jeopardy-yellow-statix'}>
                <DeleteCategoryModal show={show} handleClose={handleClose}
                                    category={category} setCategories={setCategories}
                />
                <button className={'btn btn-small bg-dark-green'} onClick={handleShow}>
                    <i className="material-icons text-danger">delete_forever</i>
                </button>
            </td>
        </tr>
    )
};

export default CategoryTableHeader;