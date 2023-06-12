import React, {useCallback, useState} from "react";
import useSubject from "../hooks/useSubject";
import useHttp from "../hooks/useHttp";
import {useDispatch, useSelector} from "react-redux";
import {miscDataActions} from "../store/miscData";

const SubjectForm = props => {
    const [subject, setSubject] = useState({payload: ""});
    const [subjectError, setSubjectError] = useState("");
    const {postHttpRequest} = useHttp();
    const {subjectInputRegex, subjectValidation} = useSubject();
    const dispatch = useDispatch();
    const update = useSelector((state)=>state.miscData.update);

    const inputChange = useCallback((e) => {
        console.log(e.target.value)

        if (subjectInputRegex(e.target.value)) {

            console.log("valid")
            let subjectObj = {...subject};
            subjectObj.payload = e.target.value;

            setSubject(subjectObj)

        }else{
            console.log("validation failed")
        }


    }, [subject]);

    const submitSubject = async (e) => {
        e.preventDefault();

        if (subjectValidation(subject.payload)) {

            console.log("subject is valid: " + subject.payload)
            const configRequest = {
                url: "subjects",
                data: subject,
            }

            const applyData = (res) => {
                if(res.response.status === 400){

                    if(res.response.data.message){

                        setSubjectError(res.response.data.message)

                    }else{
                        setSubjectError("")
                    }

                }
                dispatch(miscDataActions.setUpdate());
            }

            await postHttpRequest(configRequest, applyData);
        }

    }

    return(
        <form onSubmit={submitSubject} className={''}>
            <label htmlFor="subject">Subject</label><br/>
            <input type="text"
                   name="subject"
                   className={'form-control-sm w-100'}
                   onChange={(e) => inputChange(e)} value={subject.payload}/><br/>
            <span className={'text-danger'}>{subjectError}</span><br/>
            <button type="submit"
                    className={'btn btn-primary btn-sm'}
                    disabled={!subjectValidation(subject.payload)}
            >Submit</button>
        </form>
    )
};

export default SubjectForm;




