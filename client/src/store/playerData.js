import {createSlice} from "@reduxjs/toolkit";

const namePattern = /^[a-zA-Z\s.\-?";:{}()&*%!@$,]{0,25}$/
const usernamePattern = /^[a-zA-Z.\-?";:{}()&*%!@$,]{0,15}$/
const whiteSpaceCheck = (string) => {

    const pattern = /\s\s/;

    return pattern.test(string);
}

const player={
    name:"",
    username:"",
}


const playerSlice = createSlice({
    name:"player",
    initialState:player,
    reducers:{
        setData(state,action){

            const {name,value} = action.payload;

            if(name === "name"){

                if(!whiteSpaceCheck(value)){
                    if(namePattern.test(value)){

                        state.name = value;
                    }
                }

            }else if(name === "username"){

                if(!whiteSpaceCheck(value)){
                    if(usernamePattern.test(value)){

                        state.username = value;
                    }
                }
            }

        },
        setPlayer(state,action){
            const {name,username} = action.payload;
            state.name = name;
            state.username = username;

            //console.log("playerSlice setPlayer",JSON.parse(JSON.stringify(state)));
        },
        resetData(state){
            state.name="";
            state.username="";
        },
    }
});

export const playerActions = playerSlice.actions;
export default playerSlice.reducer;