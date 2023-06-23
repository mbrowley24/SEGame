import {createSlice} from "@reduxjs/toolkit";

const namePattern = /^[a-zA-Z\s.\-?";:{}()&*%!@$,]{0,25}$/

const category={
    id:"",
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
    host:{
        name:"",
        username:"",
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
            state.name = gameData.name;
            state.timer = gameData.timer;
            state.finalTimer = gameData.finalTimer;
            state.buzzer = gameData.buzzer;
            state.board = gameData.board;
            state.judges = gameData.judges;
            state.players = gameData.players;


        },
        setName(state, action) {

            if(namePattern.test(action.payload)){
                state.name = action.payload;
            }
        },
        setBoard(state, action) {

            state.name = action.payload.name;
            state.id = action.payload.id
            state.board.name = action.payload.board.name
            state.board.category1 = action.payload.board.category1
            state.board.category2 = action.payload.board.category2
            state.board.category3 = action.payload.board.category3
            state.board.category4 = action.payload.board.category4
            state.board.category5 = action.payload.board.category5
            state.board.category6 = action.payload.board.category6

        },correctAnswer(state, action) {

            const playerKeys = Object.keys(state.players);
            const player = {...state.buzzer}

            for(let i = 0; i < playerKeys.length; i++){

                if(state.players[playerKeys[i]].username === player.player){

                    state.players[playerKeys[i]].score += action.payload;
                    state.buzzer.buzz = false;
                    state.buzzer.player = "";
                    break;

                }
            }

        },incorrectAnswer(state, action) {

            const playerKeys = Object.keys(state.players);
            const player = {...state.buzzer}

            for(let i = 0; i < playerKeys.length; i++){

                if(state.players[playerKeys[i]].username === player.player){

                    state.players[playerKeys[i]].score -= action.payload;
                    state.buzzer.buzz = false;
                    state.buzzer.player = "";
                    break;

                }
            }
        },setPlayers(state, action) {

            state.players = action.payload;
            console.log(JSON.parse(JSON.stringify(state.players)))
        },
        setGame(state, action) {

            state.name = action.payload.name;
            state.timer = action.payload.timer;
            state.finalTimer = action.payload.finalTimer;
            state.buzzer = action.payload.buzzer;
            state.board = action.payload.board;
            state.board.host = action.payload.host;
            state.judges = action.payload.judges;
            state.players = action.payload.players;

            console.log(JSON.parse(JSON.stringify(state)))

        },setHost(state, action) {

            console.log(action.payload.name)
            state.host.name = action.payload.name;
            state.host.username = action.payload.username;

            console.log(JSON.parse(JSON.stringify(state.host)))
        }
    }
})

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;