import React from "react";



const LobbyListItem = props => {
    const {i, person, inputChange} = props;
    return(
        <li key={i} className={'list-group-item'}>
            <input type={'checkbox'}
                   className={'btn-check'}
                   id={`btn-check${i}`}
                   value={person.username}
                    onChange={(e)=>inputChange(e)}
            />
            <label className="btn btn-outline-dark" htmlFor={`btn-check${i}`}>{person.name}</label>
        </li>
    )
}

export default LobbyListItem;