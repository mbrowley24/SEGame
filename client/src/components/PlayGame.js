import React from "react";
import {useSelector, useDispatch} from "react-redux";
import ActiveGameBoard from "./ActiveGameBoard";
import ActiveQuestion from "./ActiveQuestion";

const PlayGame = props => {
    const {data} = props;
    const dispatch = useDispatch();
    const attempt  = useSelector(state => state.qAndAData.attempt);
    console.log(data);
    return(
        <React.Fragment>
            {!attempt && <ActiveGameBoard data={data}/>}
            {attempt && <ActiveQuestion/>}
        </React.Fragment>
    )
};
export default PlayGame;