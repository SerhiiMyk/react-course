import {useEffect, useState} from "react";
import {getPosts} from "../../services/fetch.service";
import Post from "../post/Post";
import './Posts.css'

export default function Posts() {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])

    return (
        <div className={'postsWrap'}>
            <h2>Posts page</h2>
            <h3>Post titles:</h3>
            {
                posts.map(value => <Post
                key={value.id}
                post={value}/>)
            }
        </div>
    );
}