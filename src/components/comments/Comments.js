import Comment from "../comment/Comment";

export default function Comments({comments}) {

  return (
    <div>
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