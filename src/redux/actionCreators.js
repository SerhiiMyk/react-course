import {ADD_USERS, LOAD_USERS} from "./actions";

const loadUsers = (payload) => {
    return{type: LOAD_USERS,payload}
}
const addUsers = (payload) => {
    return{type: ADD_USERS,payload}
}
export {loadUsers,addUsers}