import {useEffect, useState} from "react";
import {getComments} from "../../services/fetch.service";
import Comment from "../comment/Comment";
import './Coments.css'

export default function Comments() {
  let [comments,setComments] = useState([])

  useEffect(()=>{
    getComments().then(value => setComments([...value]))
  },[])
  return (
    <div className={'commentsWrap'}>
      <h2>Comments page</h2>
      <h3>Comment names:</h3>
      {
        comments.map(value =><Comment
        key={value.id}
        comment={value}/>)
      }

    </div>
  );
}