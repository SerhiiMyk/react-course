import {useEffect, useState} from "react";
import {getPosts} from "../../services/fetch.service";
import Post from "../post/Post";

export default function Posts() {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            {
                posts.map(value => <Post
                key={value.id}
                post={value}/>)
            }
        </div>
    );
}