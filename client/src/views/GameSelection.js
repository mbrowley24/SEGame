import React from "react";
import { Link } from "react-router-dom";
import "../css/generalCss.css"
const GameSelection = props => {

    return(
        <div className={'bg-light-gray height101'}>
            <h1 className={'py-3 my-2 bg-dark-green m-auto w-50'}>Choose Game</h1>
            <div className="d-flex justify-content-center">
                <div className="w-50">
                    <div 
                        className={`d-flex align-items-center height30 justify-content-around border rounded-3 
                        bg-green border rounded-3 `}>
                        <div className="">
                            <Link className="text-nowrap no_decoration_light text-bold"
                                to={'/jeopardy/dashboard'}
                            >
                                <h3 className="display-3">Jeopardy</h3>
                            </Link>
                        </div>
                        <div className="">
                            <Link className="text-nowrap no_decoration_light text-bold"
                                to={''}
                            >
                                <h3 className="display-3">Taboo</h3>
                            </Link>
                        </div>
                    </div>
                    <div className={`d-flex align-items-center height30 justify-content-around border rounded-3 bg-green`}>
                    <div className="">
                            <Link className="text-nowrap no_decoration_light text-bold"
                                to={'/talktrack/questions'}
                            >
                                <h3 className="display-3">Talk Track</h3>
                            </Link>
                        </div>
                        <div className="">
                            <Link className="text-nowrap no_decoration_light text-bold"
                                to={''}
                            >
                                <h3 className="display-3">Flash Cards</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default GameSelection;