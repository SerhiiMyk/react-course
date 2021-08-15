import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers,getPostsOfUser} from "../../services/user.fetch";
import './Users.css'


export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState([]);
    let [posts, setPosts] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    const choseUser = (u) => {
        setUser({...u});
        getPostsOfUser(u.id).then(value =>
            setPosts([...value]));
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
            {

            posts &&
            (<div className={'chosen-one'}>
                {posts.map(value => <div>- {value.title}</div>)}
            </div>)

            }


        </div>
    );
}