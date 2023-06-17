import {configureStore} from "@reduxjs/toolkit";
import miscDataReducer from "./miscData";
import boardDataReducer from "./boardData";
import gameReducer from "./gameData";
import playerReducer from "./playerData";


const store = configureStore({
    reducer: {
        miscData: miscDataReducer,
        boardData: boardDataReducer,
        gameData: gameReducer,
        playerData: playerReducer,
    }
});


export default store;