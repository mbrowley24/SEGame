import React, { useEffect, useMemo, useReducer, useState } from "react";
import useUser from "../hooks/useUser";
import useHttp from "../hooks/useHttp";
import "../css/generalCss.css"

const UserTableBodyForm = props =>{
    const {setUsers} = props;
    
    const [emailIsUnique, setEmailIsUnique] = useState(false);
    const [usernameIsUnique, setUsernameIsUnique] = useState(false);
    const {userReducer, userRegistration, USER_FIELDS, userValidation} = useUser();
    const [user, dispatch] = useReducer(userReducer, userRegistration);
    const {postHttpRequest} = useHttp();
    const validUser = useMemo(()=>userValidation(user), [user]);
    useEffect(()=>{
        
        (async ()=>{

            const configRequest = {
                url: 'user/email-exists',
                data: {email: user.email}
            };

            const applyData = res =>{
                setEmailIsUnique(res.data);
            };

            await postHttpRequest(configRequest, applyData);

        })();

    }, [user.email])

    useEffect(()=>{
            
            (async ()=>{
    
                const configRequest = {
                    url: 'user/username-exists',
                    data: {username: user.username}
                };
    
                const applyData = res =>{
                    setUsernameIsUnique(res.data);
                };
    
                await postHttpRequest(configRequest, applyData);
    
            })();

    }, [user.username])

    const inputChange = e =>{
        const {value, name} = e.target;
        
        dispatch({
            type: name,
            payload: value
        })
    }

    const createUser = async e =>{
        e.preventDefault();
        
        const configRequest={
            url: 'role/admin/check/create-user',
            data: user
        }

        const applyData = res =>{
            console.log(res.data);
            dispatch({type: USER_FIELDS.RESET})
            setUsers(users =>{
                return [...users, res.data];
            })

        }

        await postHttpRequest(configRequest, applyData);

    }

    return(
        <tr>
            <td className="input-field">
                <input type="text"
                            value={user.first_name}
                            name={USER_FIELDS.FIRST_NAME}
                            className="text-jeopardy-yellow-static-fixed"
                            id="first_name"
                            placeholder="First Name"
                            onChange={(e)=>inputChange(e)}
                />
            </td>
            <td className="input-field">
                <input type="text"
                        value={user.last_name} 
                        name={USER_FIELDS.LAST_NAME}
                        className="text-jeopardy-yellow-static-fixed"
                        id="last_name"
                        placeholder="Last Name"
                        onChange={(e)=>inputChange(e)}
                />
            </td>
            <td className="input-field">
                <input type="text"
                            value={user.username}
                            name={USER_FIELDS.USERNAME}
                            className="text-jeopardy-yellow-static-fixed"
                            id="username"
                            placeholder="Username"
                            onChange={(e)=>inputChange(e)}
                    />
                </td>
            <td>
            <input type="email"
                        value={user.email}
                        name={USER_FIELDS.EMAIL}
                        className="text-jeopardy-yellow-static-fixed"
                        id="email"
                        placeholder="Email"
                        onChange={(e)=>inputChange(e)}
                />
            </td>
            <td></td>
            <td>
                <button className="btn-small bg-green" 
                        disabled={!emailIsUnique || !usernameIsUnique || !validUser}
                        onClick={createUser}
                >
                    <i className="material-icons text-dark">save</i>
                </button>
            </td>
        </tr>
    )
};
export default UserTableBodyForm;