import Address from "../address/Address";

export default function User({user}) {
    let {address} = user;

    return (
        <div className='user'>
            <h2>{user.id} {user.name}</h2>
            <h4>username - {user.username}</h4>
            <h4>email - {user.email}</h4>
            <Address address={address}/>
            <hr/>
        </div>
    );
}