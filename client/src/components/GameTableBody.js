import React, {useEffect, useState} from "react";
import useHttp from "../hooks/useHttp";
import {Link} from "react-router-dom";

const GameTableBody = props => {
    const [game, setGame] = useState([]);
    const {getHttpRequest} = useHttp();

    useEffect(() => {

        const controller = new AbortController();
        (async () => {

            const configRequest={
                url: 'game',
                signal: controller.signal
            };

            const applyData = (res) =>{

                setGame(res.data);
            }

            await getHttpRequest(configRequest, applyData);

        })();


    }, []);

    return(
        <tbody>
        {
            game.length > 0 && game.map((data, index) => {

                return(
                    <tr key={index}>
                        <td className={'text-capitalize'}>
                            <Link to={`/jeopardy/games/${data.id}`}
                                className={'text-dark'}
                            >{data.name}
                        </Link></td>
                        <td className={'text-capitalize text-dark'} >{data.created_by}</td>
                    </tr>
                )
            })
        }

        {game.length === 0 &&

            <tr>
                <td colSpan={2} className={'text-center text-dark'}>No Games Found</td>
            </tr>
        }
        </tbody>
    )
};
export default GameTableBody;