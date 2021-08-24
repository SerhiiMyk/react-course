import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Home from "./components/home-page/Home";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <Router>
            <div>
                <div className={'wrap'}>
                    <Link to ={'/home'}>to home page</Link>
                    <Link to ={'/users-page'}>to users page</Link>
                    <Link to ={'/posts-page'}>to posts page</Link>
                    <Link to ={'/comments-page'}>to comments page</Link>
                </div>
                <Switch>
                    <Route path={'/home'}>
                        <Home/>
                    </Route>
                    <Route path={'/users-page'} component={Users}/>
                    <Route path={'/posts-page'} component={Posts}/>
                    <Route path={'/comments-page'} component={Comments}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;


// Є три лінки
// /users-page
// /posts-page
// /comments-page
// При кліку на відповідну лінку відбувається перехід на відповідний компонент,
//     який дістає з jsonplaceholder інформацію про відповідні стуності, та виводить їх повний список
