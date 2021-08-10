import '/src/Components/user/User.css'
import Adress from "../adress/Adress";
let classListUser = 'user'
export default function User({user, i}) {
    if (i > user.length) return <h2>This is user undefined</h2>
    let userId = user[i]
    return (
        <div className='user'>
            <h3>id - {userId.id}</h3>
            <h3>name - {userId.name}</h3>
            <h3>username -{userId.username}</h3>
            <h3>email -{userId.email}</h3>

            <hr/>
            <Adress userId={userId}/>

        </div>

    );
}