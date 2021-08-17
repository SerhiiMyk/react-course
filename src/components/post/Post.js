import './Post.css'

export default function Post({post, postDetails}) {

    const onClickPostDetails = () => {
        postDetails(post)
    }
    return (
        <div className='post'>
            <br/>
            <li><strong>id:</strong> {post.id}</li>
            <li><strong>title:</strong> {post.title}</li>
            <button onClick={onClickPostDetails}>view post details
            </button>
        </div>
    );
}