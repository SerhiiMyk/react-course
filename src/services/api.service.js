import {addUsers, loadUsers} from "../redux/actionCreators";

const getUsersThunk = () => async (dispatch) => {
    let response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    dispatch(loadUsers(response))

}
const saveUserThunk = (user) => async (dispatch) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({name:user.name}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        let savedUser =await response.json()
    dispatch(addUsers(savedUser))
}

export {getUsersThunk, saveUserThunk}