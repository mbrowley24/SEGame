

const useGame = () => {

    const namePattern = /^[a-zA-Z\s.\-?";:{}()&*%!@$,]{2,25}$/


    const validateGame = (game) => {

        if(!namePattern.test(game.name)){

            return false;
        }

        return game.board.name.length !== 0;


    };

    return(
        {
            validateGame,
            namePattern
        }
    )
};

export default useGame;