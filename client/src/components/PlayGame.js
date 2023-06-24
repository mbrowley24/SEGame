import React from "react";
import {useSelector} from "react-redux";
import ActiveGameBoard from "./ActiveGameBoard";
import ActiveQuestion from "./ActiveQuestion";

const PlayGame = props => {
    const {data, id} = props;
    const attempt  = useSelector(state => state.qAndAData.attempt);

    return(
        <React.Fragment>
            {!attempt && <ActiveGameBoard data={data} id={id}/>}
            {attempt && <ActiveQuestion/>}
        </React.Fragment>
    )
};
export default PlayGame;