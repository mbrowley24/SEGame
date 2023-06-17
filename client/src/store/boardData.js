import {createSlice} from "@reduxjs/toolkit";


const namePattern = /^[a-zA-Z\s.\-?";:{}()&*%!@$,]{0,25}$/

const boardData = {

    name: "",
    category1: {
        name: "",
        200: {
            question: "",
            answer: "",
        },
        400: {
            question: "",
            answer: "",
        },
        600: {
            question: "",
            answer: "",
        },
        800: {
            question: "",
            answer: "",
        },
        1000: {
            question: "",
            answer: "",
        }

    },
    category2: {
        name: "",
        200: {
            question: "",
            answer: "",
        },
        400: {
            question: "",
            answer: "",
        },
        600: {
            question: "",
            answer: "",
        },
        800: {
            question: "",
            answer: "",
        },
        1000: {
            question: "",
            answer: "",
        }

    },
    category3: {
        name: "",
        200: {
            question: "",
            answer: "",
        },
        400: {
            question: "",
            answer: "",
        },
        600: {
            question: "",
            answer: "",
        },
        800: {
            question: "",
            answer: "",
        },
        1000: {
            question: "",
            answer: "",
        }

    },
    category4: {
        name: "",
        200: {
            question: "",
            answer: "",
        },
        400: {
            question: "",
            answer: "",
        },
        600: {
            question: "",
            answer: "",
        },
        800: {
            question: "",
            answer: "",
        },
        1000: {
            question: "",
            answer: "",
        }

    },
    category5: {
        name: "",
        200: {
            question: "",
            answer: "",
        },
        400: {
            question: "",
            answer: "",
        },
        600: {
            question: "",
            answer: "",
        },
        800: {
            question: "",
            answer: "",
        },
        1000: {
            question: "",
            answer: "",
        }

    },
    category6: {
        name: "",
        200: {
            question: "",
            answer: "",
        },
        400: {
            question: "",
            answer: "",
        },
        600: {
            question: "",
            answer: "",
        },
        800: {
            question: "",
            answer: "",
        },
        1000: {
            question: "",
            answer: "",
        }

    }

};

const boardSlice = createSlice({
    name: "game",
    initialState: boardData,
    reducers: {
        setName(state, action) {

            if(namePattern.test(action.payload)) {
                state.name = action.payload;
            }

        },
        setQuestions(state, action) {
            state.name = action.payload.name;
            state.category1 = action.payload.category1;
            state.category2 = action.payload.category2;
            state.category3 = action.payload.category3;
            state.category4 = action.payload.category4;
            state.category5 = action.payload.category5;
            state.category6 = action.payload.category6;
        },
        setCategory1(state, action) {
            state.category1 = action.payload;
        },
        setCategory2(state, action) {
            state.category2 = action.payload;


        },
        setCategory3(state, action) {
            state.category3 = action.payload;
        },
        setCategory4(state, action) {
            state.category4 = action.payload;

        },
        setCategory5(state, action) {
            state.category5 = action.payload;

        },
        setCategory6(state, action) {

            state.category6 = action.payload;

        },deleteCategory1(state) {

            state.category1 = boardData.category1
        },
        deleteCategory2(state) {

                state.category2 = boardData.category2
        },
        deleteCategory3(state) {

                state.category3 = boardData.category3
        },
        deleteCategory4(state) {

                state.category4 = boardData.category4
        },
        deleteCategory5(state) {

                state.category5 = boardData.category5
        },
        deleteCategory6(state) {

            state.category6 = boardData.category6

        },boardReset(state) {

            state.name = boardData.name;
            state.category1 = boardData.category1;
            state.category2 = boardData.category2;
            state.category3 = boardData.category3;
            state.category4 = boardData.category4;
            state.category5 = boardData.category5;
            state.category6 = boardData.category6;
        }
    }
})

export const boardActions = boardSlice.actions;
export default boardSlice.reducer;