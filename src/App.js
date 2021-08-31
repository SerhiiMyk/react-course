import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsersThunk, saveUserThunk} from "./services/api.service";
import './App.css'

export default function App() {

    let state = useSelector(state => state)
    let dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUsersThunk())
    }, [])


    const addName = (e) => {
        let user = {name: 'Serhii'}
        dispatch(saveUserThunk(user))
    };
    return (
        <div className={'wrap'}>
            <div className={'button'}>
                <button onClick={addName}>add user</button>
            </div>
            <div className={'users'}>{state.users.map(value => <div key={value.id}><h3>{value.id}. {value.name}</h3>
            </div>)}</div>
        </div>
    );
}