import './User.css'

export default function User({user, choseUser}) {

    const onClickUserChose = () => {
        choseUser(user)
    }
    return (
        <div className='user'>
            <h3>{user.id}. {user.name}</h3>
            <button onClick={onClickUserChose}>view posts titles
            </button>
        </div>
    );
}