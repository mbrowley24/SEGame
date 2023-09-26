
import React, { useReducer } from "react";
import NavBar from "../components/NavBar";
import UsersTable from "../components/UsersTable";
import useUser from "../hooks/useUser";
import useHttp from "../hooks/useHttp";
import "../css/generalCss.css"


const AddUser = props =>{
    const {userReducer, userRegistration, USER_FIELDS} = useUser();
    const [user, dispatch] = useReducer(userReducer, userRegistration);
    const {postHttpRequest} = useHttp();

    

    

    return(
        <div className="height101">
            <NavBar/>
            <div className=" p-2">
                <h1>Users</h1>
                <div className="">
                    <UsersTable/>
                </div>
                
            </div>
        </div>
    )
};

export default AddUser;