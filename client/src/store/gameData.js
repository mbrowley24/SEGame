import {createSlice} from "@reduxjs/toolkit";
const {namePattern} = require("../hooks/useGame")

const category={
    name: "",
    200: {
        question: "",
        answer: "",
        winner: "",
        attempted:[],
        points:200,
    },
    400: {
        question: "",
        answer: "",
        winner: "",
        attempted:[],
        points:400,
    },
    600: {
        question: "",
        answer: "",
        winner: "",
        attempted:[],
        points:600,
    },
    800: {
        question: "",
        answer: "",
        winner: "",
        attempted:[],
        points:800,
    },
    1000: {
        question: "",
        answer: "",
        winner: "",
        attempted:[],
        points:1000,
    }
}

const judge={
    name:"",
    username:"",
}

const player={
    name:"",
    username:"",
    score:0,
}

const gameData = {
    name:"",
    timer: 5,
    finalTimer:30,
    buzzer:{
        buzz: false,
        player:""
    },
    board:{
        name: "",
        category1: category,
        category2: category,
        category3: category,
        category4: category,
        category5: category,
        category6: category,
    },
    judges:{
        1:judge,
        2:judge,
        3:judge,
    },
    players:{
        1:player,
        2:player,
        3:player,
        4:player,
        5:player,
        6:player,
        7:player,
        8:player,
        9:player,
        10:player,
        11:player,
        12:player,
        13:player,
        14:player,
        15:player,
        16:player,
        17:player,
        18:player,
        19:player,
        20:player,
    }
};

const gameSlice = createSlice({
    name: "gameData",
    initialState: gameData,
    reducers: {
        resetGame(state) {
            state = {...gameData};
        },
        setName(state, action) {

            if(namePattern.test(action.payload)){
                state.name = action.payload;
            }
        },
        setBoard(state, action) {

            console.log(action.payload)
            state.board.name = action.payload.name
            state.board.category1 = action.payload.category1
            state.board.category2 = action.payload.category2
            state.board.category3 = action.payload.category3
            state.board.category4 = action.payload.category4
            state.board.category5 = action.payload.category5
            state.board.category6 = action.payload.category6

            console.log(JSON.parse(JSON.stringify(state.board)))
        },
    }
})

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;