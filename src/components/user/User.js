import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/post.service";
import Posts from "../posts/Posts";
import './User.css'
import Address from "../address/Address";


export default function User({item: userItem}) {
    let {address} = userItem;
    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPostsOfUser(userItem.id).then(value => setPosts([...value]));
    }, [userItem.id])
    return (
        <div className='user'>
            <h2>{userItem.id} {userItem.name}</h2>
            <h4>username - {userItem.username}</h4>
            <h4>email - {userItem.email}</h4>
            <hr/>
            <Address address = {address}/>
            <Posts posts={posts}/>
        </div>
    );
}