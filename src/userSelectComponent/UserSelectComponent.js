import {useEffect, useState} from "react";
import {getUsers} from "../services/fetch.service";

export default function UserSelectComponent({choseUser}) {

    let [users, setUsers] = useState([])
    let [change, setChange] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    function onSubmit(e) {
        e.preventDefault()
        choseUser(change)
    }

    function cahngeOption(e) {
        setChange(e.target.value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <select name="users" id="users" onChange={cahngeOption}>

                    {users.map((item, index) => <option value={item.id} key={index}>
                        {item.name}
                    </option>)}

                </select>
                <button>show the post</button>
            </form>
        </div>
    )
}