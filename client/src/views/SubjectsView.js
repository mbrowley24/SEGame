import React from "react";
import NavBar from "../components/NavBar";
import SubjectTable from "../components/SubjectTable";
import SubjectForm from "../components/SubjectForm";
import {Link} from "react-router-dom";
import "../css/generalCss.css"

const SubjectsView = props => {


        return (
            <div>
                <NavBar/>
                <div className={''}>
                    <h1 className={'text-center'}>Question Topics</h1>
                    <Link to={'/dashboard'}>dashboard</Link>
                    <div className={'d-flex w-75 m-auto justify-content-center'}>
                        <div className={'w-25 py-5 px-3 mx-4 border'}>
                            <SubjectForm
                            />
                        </div>
                        <div className={'w-50 border height400px overflow-auto'}>
                            <SubjectTable/>
                        </div>
                    </div>
                </div>

            </div>

        )
};



export default SubjectsView;