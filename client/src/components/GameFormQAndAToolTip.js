import React,{useRef} from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";


const GameFormQAndAToolTip = props => {
    const {data} = props;
    const ref = useRef(null);
    return(
        <p>
            {data}
        </p>

    )
};
export default GameFormQAndAToolTip;