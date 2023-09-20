import React, {useCallback, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import useHttp from "../hooks/useHttp";
import {boardActions} from "../store/boardData";
import NavBar from "../components/NavBar";
import CategorySelectionTable from "../components/CategorySelectionTable";
import BoardForm from "../components/BoardForm";



const EditBoardView = props => {

    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch();
    const {getHttpRequest, postHttpRequest} = useHttp();
    const board = useSelector(state => state.boardData);
    const [reset, setReset] = useState(false);

    const inputChange = useCallback((e) => {
        const {value} = e.target;
        dispatch(boardActions.setName(value));

    },[]);

    const resetBoard = () => {
        window.location.reload();
    }


    useEffect(() => {

        if(id){
            (async () => {
                const requestConfig = {
                    url: `board/${id}`,
                }

                const applyData = (res)=>{
                    // console.log(res);

                    if(res.status === 200){
                        dispatch(boardActions.setQuestions(res.data));
                    }

                }

                await getHttpRequest(requestConfig, applyData);
            })();
        }


    }, [id]);

    const submit = async (e) => {
        e.preventDefault();

        const requestConfig = {
            url: 'board',
            data: board,
        }

        const applyData = (res)=>{
            // console.log(res);

            if(res.status === 200){
                dispatch(boardActions.boardReset());
                navigate('/dashboard');
            }

        }

        await postHttpRequest(requestConfig, applyData);
    };

    return(
        <div className={'height101 bg-light-gray'}>
            <NavBar/>
            <h1>Edit Board</h1>
            <div>
                <button className={'btn-small text-capitalize'}
                        onClick={resetBoard}
                >
                    reset form
                </button>
            </div>
            <div className={'d-flex p-2'}>
                <div className={'w-15 height600px border-3 rounded-2 '}>
                    <CategorySelectionTable/>
                </div>
                <div className={"w-100 ms-3 border"}>
                    <BoardForm
                        inputChange={inputChange}
                        submit={submit}
                    />
                </div>
            </div>
        </div>
    )
};
export default EditBoardView;