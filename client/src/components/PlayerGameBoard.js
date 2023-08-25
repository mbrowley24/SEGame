import React, {useMemo} from "react";
import ActiveGameBoard from "./ActiveGameBoard";
import {useSelector} from "react-redux";
import ActiveQuestion from "./ActiveQuestion";






const PlayerGameBoard = props => {
    const questions  = useSelector(state => state.qAndAData);
    const attempt = useMemo(() => questions.attempt, [questions.attempt]);
    const game = useSelector(state => state.gameData);

    return(
        <React.Fragment>
            {!attempt && <ActiveGameBoard data={game} id={game.room}/>}
            {attempt && <ActiveQuestion/>}
        </React.Fragment>
    )
};
export default PlayerGameBoard;