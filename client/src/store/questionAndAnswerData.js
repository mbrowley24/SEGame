import {createSlice} from "@reduxjs/toolkit";



const qAndAData={
    question: "",
    answer: "",
    value: 0,
    attempted_by:[],
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
            state.attempted_by = [];
            state.attempt = false;
        },

        setQAndA(state, action){
            state.question = action.payload.question;
            state.answer = action.payload.answer;
            state.value = Number(action.payload.value);
            state.attempt = true;
            state.attempted_by = [];
        },
        attemptedBy(state, action){
            state.attempted_by.push(action.payload);
            console.log(JSON.parse(JSON.stringify(state)));
        },

    },
 });


export const qAndAActions = questionAndAnswerSlice.actions;

export default questionAndAnswerSlice.reducer;