import {createSlice} from "@reduxjs/toolkit";



const qAndAData={
    question: "",
    answer: "",
    value: 0,
    attempt: false
}

 const questionAndAnswerSlice = createSlice({
    name: "questionAndAnswerData",
    initialState: qAndAData,
    reducers: {
        resetQAndA(state){
            state.question = "";
            state.answer = "";
            state.value = 0;
            state.attempt = false;
        },

        setQAndA(state, action){
            state.question = action.payload.question;
            state.answer = action.payload.answer;
            state.value = Number(action.payload.value);
            state.attempt = true;
        },

    },
 });


export const qAndAActions = questionAndAnswerSlice.actions;

export default questionAndAnswerSlice.reducer;