import React, {useState, useRef} from "react";
import {useDrag} from "react-dnd";

const BoardGameTableBodyRow = props => {
   const {data} = props;
   const target = useRef(null);
   const [show, setShow] = useState(false);
    const [collectedProps, drag] = useDrag({
        type: 'board',
        item: data
    });


    return(
        <React.Fragment>
            <tr ref={drag}>
                <td>{data.name}</td>
            </tr>

        </React.Fragment>

    )
};

export default BoardGameTableBodyRow;