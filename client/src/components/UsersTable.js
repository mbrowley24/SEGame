import React from "react";
import UserTableHeader from "./UserTableHeader";
import UserTableBody from "./UserTableBody";

const UserTable = props =>{

    return(
        <table className="centered bg-dark-green w-75 m-auto rounded-3">
            <UserTableHeader/>
            <UserTableBody/>
        </table>
    )
};
export default UserTable;