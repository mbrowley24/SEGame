import { createSlice } from "@reduxjs/toolkit";



const miscData = {
    update: true,
    types: [],
}


const miscSlice = createSlice({
    name: "update",
    initialState: miscData,
    reducers: {
        setUpdate(state) {

            state.update = !state.update;

        },setTypes(state, action) {

            const types = [...state.types];

            const filteredTypes = types.filter(type => type === action.payload);

            if(filteredTypes.length === 0) {
                types.push(action.payload);
            }

            state.types = [...types];

            console.log(JSON.parse(JSON.stringify(state.types)));

        }

    }
})


export const miscDataActions = miscSlice.actions;
export default miscSlice.reducer;