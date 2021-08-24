export default function PostDetails({location: {state}}) {

    return (
        <div>
            <h4>userId - {state.userId}</h4>
            <h4>title - {state.title}</h4>
            <h4>body - {state.body}</h4>
        </div>
    );
}