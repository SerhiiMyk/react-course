import Adress from "../adress/Adress";

export default function User({user, i}) {
    if (i > user.length) return <h2>This is user undefined</h2>
    return (
        <div>

            <div>
                <h3>id - {user[i].id}</h3>
                <h3>name - {user[i].name}</h3>
                <h3>username -{user[i].username}</h3>
                <h3>email -{user[i].email}</h3>

                <hr/>
                {/*<Adress user={user}/>*/}
            </div>

        </div>

    );
}