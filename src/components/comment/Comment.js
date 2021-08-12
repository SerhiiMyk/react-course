import './Comment.css'
export default function Comment({comment:{id,name,email,postId,body}}) {

    return (
        <div className='comment'>
            <h2>postId: {postId}</h2>
            <hr/>

            <h4>comment: {id}</h4>
            <hr/>
            <p>
                <strong>name:</strong>
                {name}
            </p>
            <p>
                <strong>email:</strong>
                {email}
            </p>
            <hr/>
            <p>
                <strong>body:</strong> <br/>
                {body}
            </p>
            <hr/>
        </div>
    );
}