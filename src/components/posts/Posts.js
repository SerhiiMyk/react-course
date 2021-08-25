import {useEffect, useState} from "react";
import {getPosts} from "../../service/fatch.servece";
import Post from "../post/Post";
import './Posts.css'

export default function Posts() {
    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])

    return (
        <div className={'postsWrap'}>
            <div className={'posts'}>
                <h2>Posts page</h2>
                {posts.map(value =>
                    <Post
                        post={value}
                        key={value.id}
                    />)
            }
            </div>
        </div>
    );
}