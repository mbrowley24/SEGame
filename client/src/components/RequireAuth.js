import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";


const RequireAuth = ({roles}) =>{
    const user = useSelector(state => state.playerData  );
    const location = useLocation();
    return(
        roles.includes(user.role)?
            <Outlet/>
            : 
            <Navigate to={{pathname: "/", state: {from: location}}} replace/>
    )
}

export default RequireAuth;