import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import '../post/Post.css'

export default function Posts() {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, []);


    return (
        <div className='wrap'>
            {
                posts.map(value => (
                        <Post
                            post={value}
                            key={value.id}
                        />
                    )
                )
            }
        </div>
    );
}