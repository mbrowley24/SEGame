import {configureStore} from "@reduxjs/toolkit";
import miscDataReducer from "./miscData";




const store = configureStore({
    reducer: {
        miscData: miscDataReducer
    }
});


export default store;