import React from "react";
import BoardQuestion from "./BoardQuestion";
import {useDrop} from "react-dnd";
import {useDispatch} from "react-redux";

import {BsXSquareFill} from "react-icons/bs";
import {IconContext} from "react-icons";
const BoardCategory = props => {
    const {data, action, delAction} = props;
    const dispatch = useDispatch();
    const [{isOver}, drop] = useDrop(() => ({
        accept: 'category',
        drop: (item, monitor) => {
            dispatch(action(item));
        }

    }), [data]);

    //console.log(data.name);

    return(
        <div ref={drop} className={'p-1'}>
            <h6 className={'py-1 text-jeopardy-yellow fw-bold'}>
                {data.name? data.name: "add Category"}
                {data.name?
                    <button className={'btn btn-sm btn-link'}
                        onClick={() => dispatch(delAction())}
                    >
                        <IconContext.Provider value={{ color: "red", size: ".75em" }}>
                            <BsXSquareFill/>
                        </IconContext.Provider>

                    </button>
                    : null}
            </h6>
            <div>
                <div className={''}>
                    <BoardQuestion name={data.name} data={data} value={200}/>
                </div>
                <div>
                    <BoardQuestion name={data.name}  data={data} value={400}/>
                </div>
                <div>
                    <BoardQuestion name={data.name}  data={data} value={600}/>
                </div>
                <div>
                    <BoardQuestion name={data.name}  data={data} value={800}/>
                </div>
                <div>
                    <BoardQuestion name={data.name}  data={data} value={1000}/>
                </div>
            </div>
        </div>
    )
};
export default BoardCategory;