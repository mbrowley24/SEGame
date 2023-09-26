import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {IconContext} from "react-icons";
import {BsFillPlusSquareFill} from "react-icons/bs";
import SubjectTable from "./SubjectTable";
import CategoryTable from "./CategoryTable";
import "../css/generalCss.css"
import useHttp from "../hooks/useHttp";

const DashboardTopRow = props => {
    const {getHttpRequest} = useHttp();
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {

        (async () => {
            const configRequest ={
                url: 'subjects/count',
                data: {}
            }

            const applyData = (res) => {
                console.log("subjects count");
                console.log(res.data);
                setSubjects(res.data);
            };

            await getHttpRequest(configRequest, applyData);
        } )();

    }, []);
    return(
        <div className={'row p-2  border-dark rounded-3 bg-dark-pink'}>
            <div className={'col border-end rounded'}>
                <h4 className={'text-center text-light text-capitalize p-2 m-auto my-1 p-1 w-50 rounded-3' +
                    ' fw-bolder sticky'}>
                    question subjects
                    {
                        subjects < 20 && 
                        <Link  className={'ms-1'} to={'/jeopardy/subjects'}>
                            <IconContext.Provider value={{className:'text-light',  color: "", size: ".75em" }}>
                                <BsFillPlusSquareFill/>
                            </IconContext.Provider>
                        </Link>
                    }
                </h4>
                <div className={'height30 overflow-auto skinny_black_scroll_bar rounded-3'}>
                    <SubjectTable/>
                </div>
            </div>
            <div className={'col border-start border-dark'}>
                <h4 className={'text-center text-light text-capitalize p-2 m-auto my-1 p-1 w-50 rounded-3' +
                    ' fw-bolder sticky'}>
                    categories
                    <Link className={'ms-1'} to={'/jeopardy/categories'}>
                        <IconContext.Provider value={{className:'text-light',  color: "", size: ".75em" }}>
                            <BsFillPlusSquareFill/>
                        </IconContext.Provider>
                    </Link>
                </h4>
                <div className={'height30 overflow-auto  rounded-3'}>
                    <CategoryTable/>
                </div>
            </div>
        </div>
    )
};

export default DashboardTopRow;