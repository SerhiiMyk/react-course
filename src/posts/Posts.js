import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../services/fetch.service";

export default function Posts({userId}) {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts(userId).then(value => setPosts([...value]))
    }, [userId, posts])

    return (
        <div>
            <h3>post titles:</h3>
            {
                posts.map(value =>
                    <Post
                        post={value}
                        key={value.id}/>)
            }
        </div>
    );
}

