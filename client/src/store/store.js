import {configureStore} from "@reduxjs/toolkit";
import miscDataReducer from "./miscData";
import boardDataReducer from "./boardData";
import gameReducer from "./gameData";
import playerReducer from "./playerData";
import questionAndAnswerReducer from "./questionAndAnswerData";
import socketReducer from "./socketStore";

const store = configureStore({
    reducer: {
        miscData: miscDataReducer,
        boardData: boardDataReducer,
        gameData: gameReducer,
        playerData: playerReducer,
        qAndAData: questionAndAnswerReducer,
        socketData: socketReducer
    }
});


export default store;