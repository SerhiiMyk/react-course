import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.service";
import Comments from "../comments/Comments";

export default function Post({post:{id,title,userId}}) {
    let [comments, setComments] = useState([])

    useEffect(() => {
        getComments(id).then(value => setComments([...value]))
    }, [])


    return (
        <div>
            {userId} - {title}

            <hr/>
            <Comments comments={comments}/>

        </div>
    );
}