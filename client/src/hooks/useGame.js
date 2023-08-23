

const useGame = () => {

    const namePattern = /^[a-zA-Z\s.\-?";:{}()&*%!@$,]{2,25}$/

    const whiteSpaceCheck = (string) => {

        const pattern = /\s\s/;

        return pattern.test(string);
    }

    const validateGame = (game) => {

        if(!namePattern.test(game.name)){

            return false;
        }

        return game.board.name.length !== 0;


    };


    const getPlayers = (players) => {

        const returnPlayers = [];

        if(players){
            const playerCount = Object.keys(players);

            for(let i = 0; i < playerCount.length; i++){

                returnPlayers.push(players[playerCount[i]]);
            }
        }


        return returnPlayers;

    };



    const addPlayer = (player) => {

        return {
            name: player.name,
            username:  Math.random().toString(36).substring(2,10),
            score: 0,
        };
    };

    const canJoin = (players, username) => {

        const playersList = JSON.parse(JSON.stringify(players));

        return playersList.filter(player => player.username === username).length === 0;
    }


    const anonymousPlayers = (players) => {
        let returnValue = false;

        const namePattern = /^[a-zA-Z0-9\s.\-?";:{}()&*%!@$,]{2,25}$/
        const usernamePattern = /^[a-zA-Z0-9_.\-?";:{}()&*%!@$,]{2,15}$/

        if(!whiteSpaceCheck(players.name)){

            if(namePattern.test(players.name)){

                returnValue =  true;

            }
        }

        return returnValue

    };


    const playerFull = (players) => {

        const playerKeys = Object.keys(players);

        for(let i = 0; i < playerKeys.length; i++){
            if(players[playerKeys[i]].name.length === 0){
                return false;
            }
        }

        return true;
    };

    const isHostCheck = (host, username) => {

        let returnValue = false;

        if(host.username.length > 0){
            if(username.length > 0){
                returnValue = host.username === username;
            }
        }

        return returnValue;
    }
    const hostJoined = (host) => {

        if(host === undefined || host === null){
            console.log('host undefined');
            return false;
        }

        console.log(host);
        let returnValue = false;

        if(host.name){

            returnValue = host.name.length > 0;
        }

        return returnValue;

    };

    const updateHost = (game, host) => {

        if(game){

            const gameObj = JSON.parse(JSON.stringify(game));

            if(host){

                if(host.name){

                    if(host.username){

                        gameObj.host.name = host.name;
                        gameObj.host.username = host.username;

                    }
                }

            }

            return gameObj;
        }

        return game;

    };

    const questionAttempted = (data, value, id) => {

        return {
            question: data[value].question,
            answer: data[value].answer,
            value: value,
            attempt: true,
            room: id
        };
    };

    const playerPanelCss = (buzzed, attempted, me) => {

        let returnedCss = 'list-group-item background-jeopardy';

        console.log(me);

        if(me){
            returnedCss = 'list-group-item list-group-item-dark bg-secondary';
        }

        if(buzzed){
            returnedCss = 'list-group-item list-group-item-secondary bg-dark';
        }

        if(attempted){
            returnedCss = 'list-group-item list-group-item-danger text-decoration-line-through';
        }

        return returnedCss;
    }

    const inGame = (myUsername, game) => {

        let returnValue = false;
        // console.log(game.lobby);
        // console.log(myUsername);

        const inLobby = game.lobby.filter(player => player.username === myUsername);

        if(inLobby.length === 1){
            console.log('in lobby');
            returnValue = true;
        }

        const inPlayerPool = game.players.filter(player => player.username === myUsername);

        if(inPlayerPool.length === 1){
            console.log('in player pool');
            returnValue = true;
        }
        return returnValue;
    }


    const playerInGame = (players, player) => {

        return players.filter(p => p.username === player.username).length === 1;

    }



    return(
        {
            addPlayer,
            anonymousPlayers,
            getPlayers,
            isHostCheck,
            inGame,
            canJoin,
            hostJoined,
            playerFull,
            playerPanelCss,
            playerInGame,
            updateHost,
            questionAttempted,
            validateGame,
            namePattern
        }
    )
};

export default useGame;