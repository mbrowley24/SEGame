import React, {useEffect ,useState} from "react";
import useHttp from "../hooks/useHttp";
import {Link} from "react-router-dom";

const BoardTableBody = (props) => {
    const [boards, setBoard] = useState([]);
    const {getHttpRequest} = useHttp();

    useEffect(() => {

        const controller = new AbortController();

        (async () => {

            const configRequest = {
                url: "board",
                signal: controller.signal
            }

            const applyData = (res)=>{
                //console.log(res);
                setBoard(res.data)
            };

            await getHttpRequest(configRequest, applyData)

        })();


        return () => {
            controller.abort();
        }

    }, []);

    return(
        <tbody>
        {
            boards.map((board, index) => {

                return(
                    <tr key={index}>
                        <td className={'text-capitalize text-center'} scope="row">
                            <Link to={`/jeopardy/board/${board.id}`}
                                    className={'text-capitalize text-dark'}
                            >{board.name}</Link>
                        </td>
                        <td className={'text-capitalize text-center text-dark '} scope="row"
                        >{board.created_by}</td>
                    </tr>
                )
            })
        }

        </tbody>
    )
};

export default BoardTableBody;