import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.service";
import Comments from "../comments/Comments";
import './Post.css'

export default function Post({post:{id,title,body}}) {
    let [comments, setComments] = useState([])

    useEffect(() => {
        getComments(id).then(value => setComments([...value]))
    }, [id])

    return (
        <div className='post'>

            <h3>post: {id}</h3>
            <hr/>
            <p>
                <strong>title:</strong> {title}
            </p>
            <hr/>
            <p>
                <strong>body:</strong> <br/>
                {body}
            </p>
            <hr/>
            <Comments comments={comments}/>

        </div>

    );
}