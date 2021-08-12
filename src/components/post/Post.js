import './Post.css'
export default function Post({post:{id,title,userId,body}}) {

    return (

        <div className='post'>
            <h2>user: {userId}</h2>
            <hr/>
            <h4>post: {id}</h4>
            <hr/>
            <p>
                <strong>title:</strong> {title}
            </p>
            <hr/>
            <p>
                <strong>body:</strong> <br/>
                {body}
            </p>

        </div>
    );
}