import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/user.service";
import Posts from "../posts/Posts";
import Address from "../address/Address";

export default function User({item: userItem}) {
    let {address}=userItem;
    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPostsOfUser(userItem.id).then(value => setPosts([...value]));
    }, [userItem.id])
    return (
        <div>
            <div>
                <h2>{userItem.id} {userItem.name}</h2>
                <Address address = {address}/>
                <Posts items={posts}/>
            </div>

        </div>
    );
}