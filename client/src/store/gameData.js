import {createSlice} from "@reduxjs/toolkit";

const namePattern = /^[a-zA-Z0-9_\s.\-?";:{}()&*%!@$,]{0,25}$/

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
    players:[]
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

            const filteredPlayers = state.players.filter(player => player.username === action.payload.username);

            if(filteredPlayers.length === 0){

                function filterName(player){
                    const name = player.name.split("(")[0];
                    return name === action.payload.name;
                }

                const filterNameResult = state.players.filter(filterName);

                if(filterNameResult.length > 0){

                    const player={
                        name: `${action.payload.name}(${filterName.length})`,
                        username: action.payload.username,
                        score:0,
                    }

                    state.players = [...state.players, player];

                }else{
                    state.players = [...state.players, action.payload];
                }

            }

            console.log(JSON.parse(JSON.stringify(state.players)))
        },
        setGame(state, action) {

            let name = "";
            let username = "";

            if(state.host.name.length > 0){
                name = state.host.name;
                username = state.host.username;
            }

            if(action.payload.host.name.length > 0){
                name = action.payload.host.name;
                username = action.payload.host.username;
            }

            state.name = action.payload.name;
            state.timer = action.payload.timer;
            state.finalTimer = action.payload.finalTimer;
            state.buzzer = action.payload.buzzer;
            state.host.name = name;
            state.host.username = username;
            state.board = action.payload.board;
            state.host = action.payload.host;
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