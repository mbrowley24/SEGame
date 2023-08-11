import React, {useState} from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import CategoryToolTip from "./CategoryToolTip";
import {useDrag} from "react-dnd";


const CategorySelectionTableBodyRow = props => {
    const {data} = props;
    const target = React.useRef(null);
    const [show, setShow] = useState(false);
    const [collect, drag] = useDrag(()=>({
        type: "category",
        item: data,
        collect: monitor => ({
            isDragging: !!monitor.isDragging()? 0.5:1
        })
    }))

    return(
        <React.Fragment>
            <tr ref={target}
                className={'border border-dark small'}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
                <td ref={drag} className={'complement-board-bg text-jeopardy-yellow'}
                >
                    {data.name}
                </td>
            </tr>
            <Overlay target={target.current} show={show} placement={'left'}>
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        <CategoryToolTip data={data}/>
                    </Tooltip>
                )}
            </Overlay>
        </React.Fragment>

    )
};

export default CategorySelectionTableBodyRow;