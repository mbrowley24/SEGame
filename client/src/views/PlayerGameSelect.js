import React, {useState} from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import "../css/generalCss.css"

const PlayerGameSelect = (props) => {
    const [jeopardy, setJeopardy] = useState(false); // ['jeopardy', 'taboo'
    const [taboo, setTaboo] = useState(false);
    const navigate = useNavigate();

    const jeopardyClick = () => {
        navigate('jeopardy');
    };

    const selectedDiv = () =>{

        return `w-50 m-auto bg-dark-green border rounded-3 border-light border-4  height30 d-flex align-items-center 
        justify-content-center text-center clickable selected_border mx-2`;
    }

    const unselectedDiv = () =>{
        return `w-50 m-auto bg-dark-green height30 rounded-3 d-flex align-items-center 
        justify-content-center text-center clickable mx-2`
    };

    const jeopardySelect = () => setJeopardy(true)
    const jeopardyUnSelect = () => setJeopardy(false);

    const tabooSelect = () => setTaboo(taboo=>!taboo);

    return(
        <div className={'container-fluid bg-light-gray height101'}>
            <div className='d-flex justify-content-center align-items-center height30'>
                <div className='pt-5  p-2'>
                    <h1>Choose Game Select</h1>
                    <Link to={'/'}
                        className='text-capitalize text-dark'
                    >Back to</Link>
                </div>
            </div>
            <div className='d-flex height30 height50 w-50 m-auto' >
                <div className={jeopardy? selectedDiv() : unselectedDiv()}
                    onClick={jeopardyClick}
                    onMouseEnter={jeopardySelect}
                    onMouseLeave={jeopardyUnSelect}
                >
                    <h2 className='text-light'>Jeopardy</h2>
                </div>
                <div className={taboo?selectedDiv():unselectedDiv()}
                >
                    <div>
                        <h2 className='text-secondary'>Taboo</h2>
                        <p className='text-light'>Comming Soon</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PlayerGameSelect;