import React from "react";


const PlayerForm = props =>{
    const {newPlayer, user, inputChange, field, submit} = props;

    return(
        <form onSubmit={submit} className=" rounded-3 p-1">
            <div className="input-field d-inline-block">
                <input type="text"
                        value={user.first_name}
                        name={field.FIRST_NAME}
                        className="text-jeopardy-yellow-static-fixed"
                        id="first_name"
                        onChange={(e)=>inputChange(e)}
                        />
            </div>
            <div className="input-field d-inline-block">
                <input type="text"
                        value={user.last_name} 
                        name={field.LAST_NAME}
                        className="text-jeopardy-yellow-static-fixed"
                        id="last_name"
                        onChange={(e)=>inputChange(e)}
                />
            </div>
            <div className="input-field d-inline-block">
                <input type="text"
                        value={user.username}
                        name={field.USERNAME}
                        className="text-jeopardy-yellow-static-fixed"
                        id="username"
                        onChange={(e)=>inputChange(e)}
                        />
            </div>
            <div className="input-field d-inline-block">
                <input type="email" 
                        value={user.email}
                        name={field.EMAIL}
                        className="text-jeopardy-yellow-static-fixed"
                        id="email"
                        onChange={(e)=>inputChange(e)}
                />
            </div>
        </form>
    )
};
export default PlayerForm;