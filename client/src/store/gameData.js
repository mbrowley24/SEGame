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
    lobby:[],
    game_full:false,
    host:{
        name:"",
        username:"",
    },
    players:[],
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
        },addLobby(state, action) {

            //console.log(action.payload);
            const lobbyList = JSON.parse(JSON.stringify(state.lobby));
            let username = action.payload.username;

            const player_username_check = state.lobby.filter((player) => player.username === username);
            const usernameCheck = state.players.filter((player) => player.username === username);
            const user_count = state.lobby.length + state.players.length;

            if(usernameCheck.length === 0 && player_username_check.length === 0 && user_count < 3){

                function filterName(player){


                    if(player.name === action.payload.name){
                        return true
                    }

                    const name = player.name.split("(");

                    if(name.length >= 1){

                        if(name[0] === action.payload.name){
                            return true;
                        }
                    }

                    return false;
                }

                const filteredLobby = lobbyList.filter(filterName);

                if(filteredLobby.length === 0){

                    const newPlayer = {
                        name: action.payload.name,
                        username: username,
                        score: 0
                    }

                    lobbyList.push(newPlayer);

                    state.lobby = lobbyList;

                }else{

                    let name = `${action.payload.name}(${filteredLobby.length})`;

                    let filteredNameCheck = lobbyList.filter((player) => player.name === name);

                    while(filteredNameCheck.length > 0){

                        name = `${action.payload.name}(${filteredNameCheck.length+1})`;
                        filteredNameCheck = lobbyList.filter((player) => player.name === name);
                    }

                    const newPlayer = {
                        name: name,
                        username: username,
                        score: 0
                    }

                    lobbyList.push(newPlayer);

                    state.lobby = lobbyList;
                }
            }


            state.gameFull = state.lobby.length + state.players.length > 19;


        },
        setBoard(state, action) {
            console.log(action.payload);
            state.name = action.payload.name;
            state.id = action.payload.id
            state.board.name = action.payload.board.name
            state.board.category1 = action.payload.board.category1
            state.board.category2 = action.payload.board.category2
            state.board.category3 = action.payload.board.category3
            state.board.category4 = action.payload.board.category4
            state.board.category5 = action.payload.board.category5
            state.board.category6 = action.payload.board.category6

        },setBoardOnly(state, action){

            console.log(action.payload);
            state.board.name = action.payload.name
            state.board.category1 = action.payload.category1
            state.board.category2 = action.payload.category2
            state.board.category3 = action.payload.category3
            state.board.category4 = action.payload.category4
            state.board.category5 = action.payload.category5
            state.board.category6 = action.payload.category6

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



            const players = [...state.players]
            players.sort((a,b) =>{
                if (a.score > b.score) {
                    return -1;
                }
                if (a.score < b.score) {
                    return 1;
                }
                return 0;
            });

            state.players = players;


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

            const players = [...state.players]
            players.sort((a,b) =>{
                if (a.score > b.score) {
                    return -1;
                }
                if (a.score < b.score) {
                    return 1;
                }
                return 0;
            });

            state.players = players;

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

            console.log(action.payload);
            let currentPlayers = JSON.parse(JSON.stringify(state.players));
            const newPlayers = [...action.payload.players];

            function filterPlayer(player) {

                const filterPlayers = currentPlayers.filter(newPlayer => newPlayer.username === player.username);
                console.log(player.username)
                return filterPlayers.length === 0;
            }

            function filterLobby(player) {

                const filterPlayers = newPlayers.filter(newPlayer => newPlayer.username === player.username);

                return filterPlayers.length === 0;
            }

            if(action.payload.game){

                console.log(action.payload);
                state.name = action.payload.game.name;
                state.timer = action.payload.game.timer;
                state.finalTimer = action.payload.game.finalTimer;
                state.buzzer = action.payload.game.buzzer;
                state.board = action.payload.game.board;
                state.host = action.payload.game.host;
                state.players = action.payload.game.players;

                currentPlayers = [];
                currentPlayers = [...action.payload.game.players]

            }

            if(state.players.length === 0){

                    state.lobby = state.lobby.filter(filterLobby);
                    state.players = newPlayers;
                    console.log(JSON.parse(JSON.stringify(state)))

            }else{

                state.lobby = state.lobby.filter(filterLobby);
                const addPlayers = newPlayers.filter(filterPlayer);
                console.log(addPlayers);
                console.log(currentPlayers);
                state.players = currentPlayers.concat(addPlayers);

            }



            console.log(JSON.parse(JSON.stringify(state)))
        },
        setGame(state, action) {

            console.log(action.payload)


            state.name = action.payload.name;
            state.timer = action.payload.timer;
            state.finalTimer = action.payload.finalTimer;
            state.buzzer = action.payload.buzzer;
            state.board = action.payload.board;
            state.host = action.payload.host;
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
        },
        removePlayer(state, action) {

            const players = JSON.parse(JSON.stringify(state.players));

            state.players = players.filter(player => player.username !== action.payload);

        },gameFull(state) {

            state.game_full = true;
        }, gameFullReset(state) {

            state.game_full = false;
        }
    }
})

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;