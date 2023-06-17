

const useGame = () => {

    const namePattern = /^[a-zA-Z\s.\-?";:{}()&*%!@$,]{2,25}$/


    const ValidateGame = (game) => {

        if(!namePattern.test(game.name)){

            return false;
        }

        return game.board.name.length !== 0;


    };

    return(
        {
            ValidateGame,
            namePattern
        }
    )
};

export default useGame;