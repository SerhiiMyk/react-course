
import {useEffect, useState} from "react";
import {getComments} from "../../services/comments.fetch";
import './Comments.css'
import Comment from "../comment/Comment";



export default function Comments() {

    let [comments, setComments] = useState([]);
    let [comment, setComment] = useState(null);

    useEffect(() => {
        getComments().then(value => setComments([...value]));
    }, []);

    const commentDetails = (c) => {
        setComment({...c});
    }
    return (
        <div className={'wrap'}>

            <div className={'comments-box'}>
                <h2>comments:</h2>
                {
                    comments.map(value =>
                        <Comment
                            key={value.id}
                            comment={value}
                            commentDetails={commentDetails}
                        />)
                }

            </div>

            {
                comment &&
                (<div className={'comment-details'}>
                    <h2>details:</h2>
                    <li><strong>postId:</strong> {comment.postId}</li>
                    <li><strong>email:</strong> {comment.email}</li>
                    <li><strong>body:</strong> {comment.body}</li>
                </div>)
            }

        </div>
    );
}