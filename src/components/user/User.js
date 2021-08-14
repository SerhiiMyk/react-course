import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/post.service";
import Posts from "../posts/Posts";
// import './User.css'
import Address from "../address/Address";


export default function User({user, choseUser}) {
    let {address} = user;
    // let [posts, setPosts] = useState([])

    // useEffect(() => {
    //     getPostsOfUser(user.id).then(value => setPosts([...value]));
    // }, [user.id])



    const onClickUserChose = () => {
        choseUser(user)
    }
    return (
        <div className='user'>
            <h2>{user.id} {user.name}</h2>
            <button onClick={onClickUserChose}>details
            </button>
            <h4>username - {user.username}</h4>
            <h4>email - {user.email}</h4>
            <hr/>
            <Address address={address}/>
            {/*<Posts posts={posts}/>*/}
        </div>
    );
}