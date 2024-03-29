import {configureStore} from "@reduxjs/toolkit";
import miscDataReducer from "./miscData";
import boardDataReducer from "./boardData";
import gameReducer from "./gameData";
import playerReducer from "./playerData";
import questionAndAnswerReducer from "./questionAndAnswerData";
import socketReducer from "./socketStore";
import lobbyReducer from "./lobbyData";
import passwordReducer from "./resetPassword";

const store = configureStore({
    reducer: {
        miscData: miscDataReducer,
        boardData: boardDataReducer,
        gameData: gameReducer,
        passwordData: passwordReducer,
        playerData: playerReducer,
        qAndAData: questionAndAnswerReducer,
        socketData: socketReducer,
        lobbyData: lobbyReducer
    }
});


export default store;