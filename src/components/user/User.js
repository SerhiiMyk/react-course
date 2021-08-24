import {useHistory} from "react-router";

export default function User({user}) {

    let history = useHistory()


    let showDetails = () => {
        history.push('/users/' + user.id, user)
    }

    return (
        <div>
            {user.name} - <button onClick={showDetails}>show user details</button>
        </div>
    );
}