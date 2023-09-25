import { createSlice } from "@reduxjs/toolkit";


const data = {
    password: "",
};


const passwordSlice = createSlice({
    name:"password",
    initialState: data,
    reducers:{
        setPassword(state, action){
            
            state.password = action.payload;
        },
        resetPassword(state){
            state.password = "";
        }
    }
});

export default passwordSlice.reducer;
export const passwordActions = passwordSlice.actions;