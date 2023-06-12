import { createSlice } from "@reduxjs/toolkit";



const miscData = {
    update: true
}


const miscSlice = createSlice({
    name: "update",
    initialState: miscData,
    reducers: {
        setUpdate(state) {

            state.update = !state.update;

        },

    }
})


export const miscDataActions = miscSlice.actions;
export default miscSlice.reducer;