import Comment from "../comment/Comment";
import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.service";
import '../comment/Comment.css'

export default function Comments() {

  let [comments, setComments] = useState([]);
  // console.log(comments)

  useEffect(() => {
    getComments().then(value => setComments([...value]))

  }, []);


  return (
    <div className='wrap'>
      {
        comments.map(value=>(
            <Comment
            comment={value}
            key={value.id}/>

        ))
      }

    </div>
  );
}