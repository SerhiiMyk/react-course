
import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.fetch";
import './Posts.css'
import Post from "../post/Post";



export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, []);

    const postDetails = (p) => {
        setPost({...p});
    }
    return (
        <div className={'wrap'}>

            <div className={'posts-box'}>
                <h2>posts:</h2>
                {
                    posts.map(value =>
                        <Post
                            key={value.id}
                            post={value}
                            postDetails={postDetails}
                        />)
                }

            </div>

            {
            post &&
            (<div className={'post-details'}>
                <h2>details:</h2>
                <li><strong>userId:</strong> {post.userId}</li>
                <li><strong>body:</strong> {post.body}</li>
            </div>)
            }

        </div>
    );
}