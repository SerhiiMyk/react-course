import {useEffect, useState} from "react";
import {getUsers} from "../../services/fetch.service";
import User from "../user/User";
import './Users.css'

export default function Users() {

    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    return (
        <div className={'usersWrap'}>
            <h2>Users page</h2>
            <h3>User names:</h3>
            {
                users.map(value => <User
                key={value.id}
                user={value}/>)
            }

        </div>
    );
}