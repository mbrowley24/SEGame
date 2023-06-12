import React from "react";
import NavBar from "../components/NavBar";
import SubjectTable from "../components/SubjectTable";
import {BsFillPlusSquareFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import { IconContext } from "react-icons";

const Dashboard = props => {

    return(
        <div>
            <NavBar/>
            <h1>Jeopardy Dashboard</h1>
            <div className="container border">
                <div className={'row p-2'}>
                    <div className={'col border'}>
                        <h4 className={'text-center text-capitalize'}>
                            question subjects
                            <Link className={'ms-1'} to={'/subjects'}>
                                <IconContext.Provider value={{ color: "grey", size: ".75em" }}>
                                    <BsFillPlusSquareFill/>
                                </IconContext.Provider>
                            </Link>
                        </h4>
                        <SubjectTable/>
                    </div>
                    <div className={'col'}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;