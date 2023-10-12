import React, {useEffect, useState} from "react";
import useHttp from "../hooks/useHttp";
import { Link } from "react-router-dom";


const AddUser = props =>{
    const [isAdmin, setIsAdmin] = useState(false);
    const {getHttpRequest} = useHttp();
    useEffect(()=>{

        (async ()=>{

            const configRequest = {
                url: 'role/admin/check',
            };


            const applyData = res =>{
                
                setIsAdmin(res.data);
            };

            await getHttpRequest(configRequest, applyData);
        
        })();

    }, [])

    return(
        <React.Fragment>
            {isAdmin && 
                <li className ="nav-item">
                    <Link className ="nav-link active text-capitalize text-light" 
                            to={"/admin/users"} aria-current="page">
                                Add User
                    </Link>
                </li>
            }
        </React.Fragment>
        )
};
export default AddUser;