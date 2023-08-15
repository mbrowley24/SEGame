import React,{useEffect, useState, forwardRef} from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from 'react-bootstrap/Popover';
import "../css/generalCss.css"
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const GameFormQAndAPreview = props => {
    const {data, value} = props;
    const [show, setShow] = useState(false);
    const UpdatePopOver = forwardRef(
        ({ popper, children, show: show, ...props }, ref) => {
            useEffect(() => {
                popper.scheduleUpdate();
            }, [popper]);

            return (
                <Popover ref={ref} body {...props}>
                    {children}
                </Popover>
            );
        },
    );



    return(
        <React.Fragment>
            <OverlayTrigger
                            placement={'top'}
                            trigger={'focus'}
                            show={show}
                            defaultShow={false}
                            onHide={!show}
                            overlay={
                                <UpdatePopOver>
                                    {data[value].answer?  data[value].answer : `${value}`}
                                </UpdatePopOver>
                            }
            >
                <div className={'border border-dark d-flex height100Px justify-content-center align-items-center p-1'}
                     onMouseEnter={() => setShow(true)}
                     onMouseLeave={() => setShow(false)}
                >
                    {data[value].question?
                        <p className={'text-small fw-bolder text-wrap text-jeopardy-yellow'}>
                            {data[value].question}
                        </p> :
                        <p>${value}</p>}
                </div>
            </OverlayTrigger>

        </React.Fragment>
    )
};
export default GameFormQAndAPreview;