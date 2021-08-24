import {Link, Route} from "react-router-dom";
import PostDetails from "../post.details/PostDetails";

export default function Post({post}) {

    return (
        <div>
            post {post.id}  <Link to={{pathname:'/posts/'+post.id,state:post}}>show details</Link>
            <Route path={'/posts/'+post.id}component={PostDetails}/>
        </div>
    );
}
