import React, {useEffect, useState} from "react";
import useHttp from "../hooks/useHttp";
import {useDrag} from "react-dnd";
import BoardGameTableBodyRow from "./BoardGameTableBodyRow";

const BoardGameTableBody = props => {
    const [data, setData] = useState([]);
     const {getHttpRequest} = useHttp();


    useEffect(() => {

        const controller = new AbortController();

        (async () => {

            const configRequest={
                    url: "board/game",
                    signal: controller.signal,
            }

            const applyData = (res) =>{
                console.log(res.data);
                setData(res.data);
            }

            await getHttpRequest(configRequest, applyData);

        })();

    }, []);



    return(
        <tbody>
        {
            data.map((item, index) => {
                return(
                    <BoardGameTableBodyRow key={index} data={item}/>
                )
            })
        }
        </tbody>
    )
};

export default BoardGameTableBody;