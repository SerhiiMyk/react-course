import {LOAD_MOVIES} from "../action/actionType";

let initialState = {data:{}};
const moviesReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_MOVIES:
            return {...state,data:{...action.payload}}
        default:
            return state
    }
}
export {moviesReducer}