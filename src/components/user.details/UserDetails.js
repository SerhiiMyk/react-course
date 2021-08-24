import {useEffect, useState} from "react";
import {getUser} from "../../service/fatch.servece";
import Address from "../address/Address";
import './UserDetails.css'

export default function UserDetails({history, match: {params: {id}}}) {


    let [user, setUser] = useState({})
    let {address} = user;


    useEffect(() => {
        getUser(id).then(value => setUser({...value}))
    }, [id])
    return (
        <div>
            <h2>id - {user.id}</h2>
            <h4>username - {user.username}</h4>
            <h4>email - {user.email}</h4>
            <hr/>
            {/*<Address address={address}/>*/}

        </div>
    );
}