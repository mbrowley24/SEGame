import React from "react";
import NavBar from "../components/NavBar";
import SubjectTable from "../components/SubjectTable";
import SubjectForm from "../components/SubjectForm";
import "../css/generalCss.css"

const SubjectsView = props => {


        return (
            <div className="bg-light-gray">
                <NavBar/>
                <div className={'height875px'}>
                    <h1 className={'text-center my-2 text-light  w-25 m-auto' +
                        ' bg-dark-green border rounded border-dark p-2'}
                    >Question Topics</h1>
                    <div className={'d-flex w-75 m-auto justify-content-center '}>
                        <div className={'w-25 py-5 px-3 mx-4'}>
                            <SubjectForm
                            />
                        </div>
                        <div className={'w-50 height400px overflow-auto'}>
                            <SubjectTable/>
                        </div>
                    </div>
                </div>

            </div>

        )
};



export default SubjectsView;