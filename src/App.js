import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, fetchUsers} from "./sersvices/user.api";
import {fetch_Users, pushUser} from "./redax/actions";

function App() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {users} = state

    useEffect(() => {
        fetchUsers().then(value => {
            dispatch(fetch_Users(value));
        });
    }, []);

    function onSubmit(e) {
        e.preventDefault();
        let name = e.target.name.value;
        let user ={name};
        addUser(user).then(value => dispatch(pushUser(value)))
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name={'name'}/>
                <button>add user</button>
            </form>
            <hr/>

            {
                users.map(value => <div key={value.id}> {value.name}</div>)
            }

        </div>
    );
}

export default App;
