import React from "react";


const UserTableHeader = props =>{
    const {} = props;
    return(
        <thead>
            <tr>
                <th className='text-light'>First Name</th>
                <th className='text-light'>Last Name</th>
                <th className='text-light'>Username</th>
                <th className='text-light'>Email</th>
                <th className='text-light'>Admin</th>
                <th className='text-light'>Action</th>
            </tr>
        </thead>
    )
    
};
export default UserTableHeader;