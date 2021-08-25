import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import './App.css'

function App() {
    return (
        <Router>
            <div className={'headerWrap'}>
                <h3><Link to={'/users'}>users page</Link></h3>
                <h3><Link to={'/posts'}>posts page</Link></h3>
            </div>
            <Route path={'/users'} component={Users}/>
            <Route path={'/posts'} component={Posts}/>
        </Router>
    );
}

export default App;


// Є дві лінки
// /users
// /posts
//
// /users - робить все те, що було на занятті останнім способом (через кнопку та ддатковий запит на сервер)
//
// /posts
// Отримує posts з jsobplaceholder, виводить їх всі.
//     Біля кожного поста зробити лінку (не конопку) яка буде вести на детальну інформацію поста. Детальну інформацію отримувати через history.state
