import './PostDetails.css'
export default function PostDetails({location: {state}}) {

    return (
        <div className={'postDetails'}>
            <p><strong>userId</strong> - {state.userId}</p>
            <p><strong>title</strong> - {state.title}</p>
            <p><strong>body</strong> - {state.body}</p>
        </div>
    );
}