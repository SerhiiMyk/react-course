
export default function Comment({comment:{id,name,email,postId,body}}) {

    return (
        <div>
            <h2>postId: {postId}</h2>
            <h4>id: {id}</h4>
            <h4>name: {name}</h4>
            <h4>email: {email}</h4>
            <p>body: <br/>{body}</p>
            <hr/>
        </div>
    );
}