import React, {useContext,useEffect, useState, useCallback, useMemo}  from "react";
import useHttp from "../hooks/useHttp";
import {useDispatch, useSelector} from "react-redux";
import {playerActions} from "../store/playerData";
import {useNavigate} from "react-router-dom";
import useGame from "../hooks/useGame";
import SocketContext from "../context/SocketContext";
const JoinGame = props => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const player = useSelector(state => state.playerData);
    const [validGame, setValidGame] = useState(false);
    const {getHttpRequest} = useHttp();
    const {socket, id, setId} = useContext(SocketContext);

    const {anonymousPlayers} = useGame();
    const passUserData = useMemo(()=>anonymousPlayers(player),[player]);

    const changeName = useCallback(e => {
        const {name, value} = e.target;
        dispatch(playerActions.setData({name:name, value:value}))
    },[]);

    const inputChange = useCallback(e => {
        const {value} = e.target;
        setId(value);
    },[]);

    const joinGame = () =>{

        console.log("join game");
        console.log(player);
        socket.emit("join_game", {room: id, player:player});
        navigate(`/games/${id}/game`);

    }


    useEffect(() => {

        const controller = new AbortController();

        const setTimeoutId = setTimeout(() => {

            // do something after 300ms

            if(id.length > 0){
                (async () => {

                    const configRequest = {
                        url: `game/${id}/exists`,
                        signal: controller.signal,
                    }
                    const applyData = res =>{

                        if(res.status === 200){
                            setValidGame(res.data);
                        }
                    }


                    await getHttpRequest(configRequest, applyData);
                })();
            }



        }, 300);

        return () => {
            clearTimeout(setTimeoutId);
            controller.abort();
            // cleanup
        };
    }, [id]);


    return(
        <React.Fragment>
            <div>
                <div>
                    <div>
                        <label className={'text-capitalize'}>
                            name
                        </label><br/>
                        <input type={'text'}
                               className={'form-control'}
                               value={player.name}
                               name={'name'}
                               onChange={(e)=>changeName(e)}
                        />
                    </div>
                    {/*<div>*/}
                    {/*    <label className={'text-capitalize'}>*/}
                    {/*        username*/}
                    {/*    </label><br/>*/}
                    {/*    <input type={'text'}*/}
                    {/*           className={' form-control'}*/}
                    {/*           value={player.username}*/}
                    {/*           name={'username'}*/}
                    {/*           onChange={(e)=>changeName(e)}*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
                <label>Game ID</label><br/>
                <input type="text"
                      className={'form-control'}
                       value={id}
                       onChange={(e)=>inputChange(e)}
                />
                <div className={'py-2'}>
                    <button
                        className={'btn btn-primary text-capitalize'}
                        disabled={!validGame || !passUserData}
                        onClick={()=>joinGame()}
                    >
                        join game
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
};
export default JoinGame;