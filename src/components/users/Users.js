import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.fetch";
import './Users.css'
import {getPostsOfUser} from "../../services/post.service";


export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    const choseUser = (u) => {
        setUser({...u});
        getPostsOfUser(u.id).then(value => console.log(value));
    }


    return (
        <div className={'wrap'}>

            <div className={'users-box'}>
                {
                    users.map(value =>
                        <User
                            key={value.id}
                            user={value}
                            choseUser={choseUser}
                        />)
                }
            </div>

            {user && <div className={'chosen-one'}>{JSON.stringify(user)}</div>}

        </div>
    );
}