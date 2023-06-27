import {createSlice} from "@reduxjs/toolkit";



const lobbyData = {
    names: []
}

const lobbySlice = createSlice({
    name: 'lobby',
    initialState: lobbyData,
    reducers: {
        addLobby(state, action){





            console.log(JSON.parse(JSON.stringify(state.names)));

        },
        removeFromLobby(state, action){

            const players = [...action.payload];

            console.log(players);
            function removePlayers(checkPlayer){

                const filteredPlayer = players.filter((player) => player.username !== checkPlayer.username);

                return filteredPlayer.length >0;
            }

            const currentPlayers = JSON.parse(JSON.stringify(state.names));

            console.log(currentPlayers.filter(removePlayers));

            state.names = currentPlayers.filter(removePlayers);
            console.log(JSON.parse(JSON.stringify(state.names)));
        },
        resetLobby(state){
            state.name = [];
        }
    },
})

export const lobbyActions = lobbySlice.actions;
export default lobbySlice.reducer;