import {Route} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUsers} from "../../service/fatch.servece";
import User from "../user/User";
import UserDetails from "../user.details/UserDetails";

export default function Users(props) {

    let {match: {url}} = props;
    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])


    return (
        <div>
            {
                users.map(value =>
                    <User
                        user={value}
                        key={value.id}/>)
            }
            <Route path={`${url}/:id`} render={(props)=>{
                return <UserDetails {...props}/>
            }}/>

        </div>
    );
}