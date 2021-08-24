import './Comment.css'
export default function Comment({comment}) {
  return (
    <div className={'postWrap'}>
      {comment.id}. {comment.name}
    </div>
  );
}