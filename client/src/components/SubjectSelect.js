import React, {useEffect, useState} from "react";
import useHttp from "../hooks/useHttp";

const SubjectSelect = props => {
    const {inputChange, name} = props;
    const [subject, setSubjects] = useState([])
    const {getHttpRequest} = useHttp();

    useEffect(()=>{

        const controller = new AbortController();

        if(subject.length === 0 ){

            (async ()=>{

                const configRequest={
                    url: "subjects",
                    signal: controller.signal
                }

                const applyData = (res)=>{
                    //console.log(res.data)
                    setSubjects(res.data)
                }

                await getHttpRequest(configRequest, applyData);
            })();
        }

    },[])

    return(
        <React.Fragment>
            <select name={name}
                    className={'w-50 form-select m-auto bg-dark-green text-jeopardy-yellow-static-fixed'}
                    onChange={(e)=>inputChange(e)}>
                <option className={'text-center text-capitalize'}
                        value=""
                >Select Subject</option>
                {
                    subject.map((item, index)=>{

                        return(
                            <option
                                key={index}
                                className={'text-center text-capitalize'}
                                value={item.id}
                            >{item.name}</option>
                        )
                        })
                }

            </select>
        </React.Fragment>


    )
};

export default SubjectSelect;