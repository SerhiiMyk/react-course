import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import '../user/User.css'
export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));

    }, []);


    return (
        <div className='wrap'>
            {
                users.map(userItem => <User key={userItem.id} item={userItem}/>)
            }
        </div>
    );
}