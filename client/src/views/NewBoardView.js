import React, {useCallback} from "react";
import NavBar from "../components/NavBar";
import BoardForm from "../components/BoardForm";
import CategorySelectionTable from "../components/CategorySelectionTable";
import "../css/generalCss.css"
import {useDispatch, useSelector} from "react-redux";
import {boardActions} from "../store/boardData";
import useHttp from "../hooks/useHttp";
import {useNavigate} from "react-router-dom";

const NewBoardView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {postHttpRequest} = useHttp();
    const board = useSelector(state => state.boardData);
    
    const inputChange = useCallback((e) => {
        const {value} = e.target;
        dispatch(boardActions.setName(value));

    },[]);

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
        <div className={'container'}>
            <NavBar/>
            <h1>New Board</h1>
            <div className={'d-flex'}>
                <div className={'w-10 border'}>
                    <CategorySelectionTable/>
                </div>
                <div className={"w-100 ms-3 heig border"}>
                    <BoardForm
                        inputChange={inputChange}
                        submit={submit}
                    />
                </div>
            </div>
        </div>
    )
};

export default NewBoardView;