import React, {useMemo} from "react";



const LobbyListItem = props => {
    const {i, person, inputChange, players} = props;
    const checked = useMemo(() => players.filter(player => player.username === person.username).length > 0,
        [players]);

    console.log(checked);

    return(
        <li key={i} className={checked? 'list-group-item complement-board-bg' : 'list-group-item background-jeopardy' }>
            <input type={'checkbox'}
                   className={'btn-check'}
                   id={`btn-check${i}`}
                   value={person.username}
                    onChange={(e)=>inputChange(e)}
            />
            <label className="btn btn-link text-jeopardy-yellow text-capitalize"
                   htmlFor={`btn-check${i}`}
            >{person.name}</label>
        </li>
    )
}

export default LobbyListItem;