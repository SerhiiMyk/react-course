import Address from "../address/Address";
import './User.css'

export default function User({user}) {
    let {address} = user;


    return (
        <div className='user'>
            <h2>{user.id} {user.name}</h2>
            <h4>username - {user.username}</h4>
            <h4>email - {user.email}</h4>
            <hr/>
            <Address address={address}/>
        </div>
    );
}