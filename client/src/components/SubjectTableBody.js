import React, {useState, useEffect} from "react";
import useHttp from "../hooks/useHttp";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const SubjectTableBody = props => {
    const update = useSelector((state)=>state.miscData.update);
    const [subjects, setSubjects] = useState([]);
    const {getHttpRequest} = useHttp();

    useEffect(() => {

        const controller = new AbortController();

        (async () => {
            const configRequest = {
                url: "questions/subjects",
                signal: controller.signal
            }

            const applyData = (res) => {

                setSubjects(res.data.subjects);
            }


           await getHttpRequest(configRequest, applyData)

        })();


        return () => {
            controller.abort();
        };
    }, [update]);


    return(
        <tbody>
        {
            subjects.map((subject, index) => {

                return(
                    <tr key={index}>
                        <td className={'text-jeopardy-yellow'}>
                            <Link
                                to={`/subjects/${subject.public_id}/questions/subject`}
                                className={'text-jeopardy-yellow'}
                            >
                                {subject.name}</Link>
                        </td>
                        <td className={'text-jeopardy-yellow'}>{subject.questions}</td>
                    </tr>
                )
            })
        }
        </tbody>
    )
};


export default SubjectTableBody;