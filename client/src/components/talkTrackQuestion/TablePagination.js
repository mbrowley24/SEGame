import React, {useContext, useLayoutEffect, useState} from "react";
import QuestionContext from "../../context/QuestionContext";
import SelectionNumOfItems from "./SelectionNumOfItems";
import "../../css/generalCss.css"


const TablePagination = props => {
    const {update} = props;
    const [currentPage, setCurrentPage] = useState([]);
    const {questionState, page, setPage} = useContext(QuestionContext);
    
    useLayoutEffect(() => {

        const pageCount = [];
        const page = questionState.page;
        const limit = page + 10;
        
        
        for(let i = page; i < limit; i++){
            pageCount.push(i + 1);    
            
        }
        
        setCurrentPage(pageCount);

        return () => {};

    }, [page]);


    const handlePageChange = value => {
        setPage(Number(value));
    };

    return(
        <div className="w-75 border m-auto">
            <div className="text-end">
                <button className="btn btn-link btn-sm"
                    disabled={questionState.firstPage}
                    onClick={() => handlePageChange(0)}    
                >
                    <i className="small material-icons">first_page</i>
                </button>
                <button className="btn btn-link btn-sm"
                        disabled={questionState.firstPage}
                        onClick={() => handlePageChange((questionState.page - 1))}
                >
                    <i className="small material-icons">keyboard_arrow_left</i>
                </button>
                {
                    currentPage.map((page, index) => {
                        return(
                            <button key={index}
                                    disabled={page > questionState.totalPages }
                                    className="btn btn-sm btn-link"
                                    onClick={() => handlePageChange(page)}
                            >{page}</button>
                        )
                    })
                }
                <button className="btn btn-link btn-sm"
                        disabled={questionState.lastPage || (questionState.page + 1) === questionState.totalPages}
                        onClick={() => handlePageChange((questionState.page + 1))}

                >
                    <i className="small material-icons">keyboard_arrow_right</i>
                </button>
                <button className="btn btn-link btn-sm"
                        disabled={questionState.lastPage || (questionState.page + 1) === questionState.totalPages}
                        onClick={() => handlePageChange(questionState.totalPages)}  
                >
                    <i className="small material-icons">last_page</i>
                </button>
            </div>
            <div className="text-end w-10 ms-auto m-1">
                <SelectionNumOfItems/>
            </div>
        </div>
        
    )
};
export default TablePagination;