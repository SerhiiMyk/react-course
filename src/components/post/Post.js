import {Link, Route} from "react-router-dom";
import PostDetails from "../post.details/PostDetails";
import './Post.css'

export default function Post({post}) {

    return (
        <div className={'post'}>
            <h4>post {post.id} <Link to={{pathname: '/posts/' + post.id, state: post}}>show details</Link></h4>
            <Route path={'/posts/'+post.id} component={PostDetails}/>
        </div>
    );
}
