import {ADD_USERS, LOAD_USERS} from "../redux/actions";

let initialState = {users:[]};
const reducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_USERS:
            return {...state,users:[...action.payload]}
        case ADD_USERS:
            let newUser = action.payload;
            let newUserArray=[...state.users,newUser]
            return {...state,users:[...newUserArray]}
        default:
            return state
    }
}
export {reducer}