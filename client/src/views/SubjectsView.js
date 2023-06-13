import React from "react";
import NavBar from "../components/NavBar";
import SubjectTable from "../components/SubjectTable";
import SubjectForm from "../components/SubjectForm";

const SubjectsView = props => {


        return (
            <div>
                <NavBar/>
                <div className={'d-flex w-75 m-auto border justify-content-center'}>
                    <div className={'w-25 py-5 px-3 mx-4 border'}>
                        <SubjectForm
                        />
                    </div>
                    <div className={'w-50'}>
                        <SubjectTable/>
                    </div>
                </div>
            </div>

        )
};



export default SubjectsView;