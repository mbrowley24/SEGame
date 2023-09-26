import React, {useEffect, useState} from "react";
import useHttp from "../hooks/useHttp";
import UserTableBodyForm from "./UserTableBodyForm";




const UserTableBody = props =>{
    const [users, setUsers] = useState([]);
    const {getHttpRequest} = useHttp();

    useEffect(()=>{
        (async ()=>{
            const configRequest = {
                url: 'role/admin/check/list',
            };

            const applyData = res =>{
                setUsers(res.data);
            };

            await getHttpRequest(configRequest, applyData);
        })();

    }, [])

    return(
        <tbody>
            {
                users.map((user, idx) =>{

                    return(
                        <tr key={idx}>
                            <td className="text-capitalize fw-bold">{user.first_name}</td>
                            <td className="text-capitalize fw-bold">{user.last_name}</td>
                            <td className="text-capitalize fw-bold">{user.username}</td>
                            <td className="fw-bold">
                                <a className="text-dark fw-bold" href={`mailto: ${user.email}`}>{user.email}</a>
                            </td>
                            <td className="text-capitalize fw-bold"></td>
                            <td className="text-capitalize fw-bold">
                                <button className="btn-small bg-green">
                                    <i className="material-icons text-danger">delete_forever</i>
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
            <UserTableBodyForm setUsers={setUsers}/>
        </tbody>
    )
};
export default UserTableBody;