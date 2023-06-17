import {createSlice} from "@reduxjs/toolkit";


const player={
    name:"",
    username:"",
}


const playerSlice = createSlice({
    name:"player",
    initialState:player,
    reducers:{
        setData(state,action){

            state.name=action.payload.name;
            state.username=action.payload.username;
        },
        resetData(state){
            state.name="";
            state.username="";
        },
    }
});

export const playerActions = playerSlice.actions;
export default playerSlice.reducer;