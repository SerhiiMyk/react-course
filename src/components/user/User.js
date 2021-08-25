import {useHistory} from "react-router";
import './User.css'

export default function User({user}) {

    let history = useHistory()


    let showDetails = () => {
        history.push('/users/' + user.id, user)
    }

    return (
        <div className={'user'}>
            <p>{user.name}</p>
            <button onClick={showDetails}>show user details</button>
        </div>
    );
}