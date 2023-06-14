import React, {useEffect, useState} from "react";
import useHttp from "../hooks/useHttp";

const SubjectSelect = props => {
    const {inputChange} = props;
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
                    console.log(res.data)
                    setSubjects(res.data)
                }

                await getHttpRequest(configRequest, applyData);
            })();
        }

    },[])

    return(
        <React.Fragment>
            <select name="subject"
                    className={'form-select'}
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