import './Comment.css'

export default function Comment({comment, commentDetails}) {

    const onClickCommentDetails = () => {
        commentDetails(comment)
    }
    return (
        <div className='comment'>
            <br/>
            <li><strong>id:</strong> {comment.id}</li>
            <li><strong>name:</strong> {comment.name}</li>
            <button onClick={onClickCommentDetails}>view comment details
            </button>
        </div>
    );
}