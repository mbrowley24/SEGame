import {createSlice} from "@reduxjs/toolkit";
import {io} from "socket.io-client";

const socketData ={
    url: "http://localhost:8000",
    id: ""
}

const socketSlice = createSlice({
    name: "socket",
    initialState: socketData,
    reducers: {
        setSocket(state, action){
            state.id = action.payload;
            const url = `${state.url}/jeopardy-${state.id}`;
            state.url = url;

            console.log(url);
        },
        setSocketNewUrl(state, action){
            state.id = action.payload.id;
            state.url = action.payload.url;
            const url = `${state.url}/${state.id}`;
            state.socket = io(url, {autoConnect: false});
        },
    }
});


export const socketActions = socketSlice.actions;
export default socketSlice.reducer;