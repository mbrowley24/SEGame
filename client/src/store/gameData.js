import {createSlice} from "@reduxjs/toolkit";
import {json} from "react-router-dom";

const namePattern = /^[a-zA-Z0-9_\s.\-?";:{}()&*%!@$,]{0,25}$/

const category={
    id:"",
    name: "",
    200: {
        question: "",
        answer: "",
        attempted:false,
        points:200,
    },
    400: {
        question: "",
        answer: "",
        attempted:false,
        points:400,
    },
    600: {
        question: "",
        answer: "",
        attempted:false,
        points:600,
    },
    800: {
        question: "",
        answer: "",
        winner: "",
        attempted:false,
        points:800,
    },
    1000: {
        question: "",
        answer: "",
        attempted:false,
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

            console.log(action.payload);
            const username = state.buzzer.player;

            for(let i = 0; i < state.players.length; i++){

                    if(state.players[i].username === username){

                        state.players[i].score += action.payload.value;
                        state.buzzer.buzz = false;
                        state.buzzer.player = "";
                        break;
                    }
            }

            const question = action.payload.question;

            if(state.board.category1[action.payload.value].question === question){

                state.board.category1[action.payload.value].attempted = true;


            }else if(state.board.category2[action.payload.value].question === question){

                console.log("here");
                state.board.category2[action.payload.value].attempted = true;

            }else if(state.board.category3[action.payload.value].question === question) {

                state.board.category3[action.payload.value].attempted = true;

            }else if(state.board.category4[action.payload.value].question === question) {

                state.board.category4[action.payload.value].attempted = true;

            }else if(state.board.category5[action.payload.value].question === question) {

                state.board.category5[action.payload.value].attempted = true;

            }else if(state.board.category6[action.payload.value].question === question) {


                state.board.category6[action.payload.value].attempted = true

            }

            console.log(JSON.parse(JSON.stringify(state.board)));

        },incorrectAnswer(state, action) {

            console.log(action.payload);
            const username = state.buzzer.player;

            for(let i = 0; i < state.players.length; i++){

                if(state.players[i].username === username){

                    state.players[i].score -= action.payload.value;
                    state.buzzer.buzz = false;
                    state.buzzer.player = "";
                    break;
                }
            }


        },notAttempted(state, action){

            state.buzzer.buzz = false;
            state.buzzer.player = "";
            const question = action.payload.question;

            if(state.board.category1[action.payload.value].question === question){

                state.board.category1[action.payload.value].attempted = true;

            }else if(state.board.category2[action.payload.value].question === question){

                state.board.category2[action.payload.value].attempted = true;

            }else if(state.board.category3[action.payload.value].question === question) {

                state.board.category3[action.payload.value].attempted = true;

            }else if(state.board.category4[action.payload.value].question === question) {

                state.board.category4[action.payload.value].attempted = true;

            }else if(state.board.category5[action.payload.value].question === question) {

                state.board.category5[action.payload.value].attempted = true;

            }else if(state.board.category6[action.payload.value].question === question) {

                state.board.category6[action.payload.value].attempted = true

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

            console.log(action.payload)


            state.name = action.payload.name;
            state.timer = action.payload.timer;
            state.finalTimer = action.payload.finalTimer;
            state.buzzer = action.payload.buzzer;
            state.board = action.payload.board;
            state.host = action.payload.host;
            state.judges = action.payload.judges;
            state.players = action.payload.players;

            console.log(JSON.parse(JSON.stringify(state)))

        },setHost(state, action) {

            console.log(action.payload.name)
            console.log(action.payload.username)
            state.host.name = action.payload.name;
            state.host.username = action.payload.username;

            console.log(JSON.parse(JSON.stringify(state)))
        },
        setBuzzer(state, action) {

            state.buzzer.buzz = true;
            state.buzzer.player = action.payload;
            console.log(JSON.parse(JSON.stringify(state)))

        },resetBuzzer(state) {
            state.buzzer.buzz = false;
            state.buzzer.player = "";
        },buzzerTimeout(state) {
            state.buzzer.buzz = false;
        }
    }
})

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;