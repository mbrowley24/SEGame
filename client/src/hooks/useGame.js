

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

    const hasPlayers = (players) => {
        let playerCount = 0;
        const playerKeys = Object.keys(players);

        for(let i = 0; i < playerKeys.length; i++){

            if(players[playerKeys[i]].name.length > 0){
                playerCount++;
            }
        }

        return playerCount > 1;
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



    const addPlayer = (game, player) => {

        const gameObj = JSON.parse(JSON.stringify(game));

        for(let i = 1; i < 21; i++){

            if(gameObj.players[i].username.length === 0){
                gameObj.players[i].name = player.name;
                gameObj.players[i].username = player.username;
                break;
            }
        };

        return gameObj.players;

    };


    const anonymousPlayers = (players) => {
        let returnValue = false;

        const namePattern = /^[a-zA-Z\s.\-?";:{}()&*%!@$,]{2,25}$/
        const usernamePattern = /^[a-zA-Z.\-?";:{}()&*%!@$,]{2,15}$/

        if(!whiteSpaceCheck(players.name)){

            if(namePattern.test(players.name)){


                if(usernamePattern.test(players.username)){
                    returnValue =  true;
                }

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

    const hostJoined = (host) => {

        let returnValue = false;

        if(host.name){

            returnValue = host.name.length > 0;
        }

        return returnValue;

    };

    return(
        {
            addPlayer,
            anonymousPlayers,
            getPlayers,
            hasPlayers,
            hostJoined,
            playerFull,
            validateGame,
            namePattern
        }
    )
};

export default useGame;