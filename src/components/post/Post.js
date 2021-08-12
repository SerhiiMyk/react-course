export default function Post({post:{id,title,userId,body}}) {

    return (

        <div>
            <h2>userId: {userId}</h2>
            <h4>id: {id}</h4>
            <h4>title: {title}</h4>
            <p>body: <br/>{body}</p>

            <hr/>


        </div>
    );
}