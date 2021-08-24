import './User.css'

export default function User({user}) {
    return (
        <div className={'userWrap'}>
            <div>
                {user.id}. {user.name}
            </div>
        </div>
    );
}