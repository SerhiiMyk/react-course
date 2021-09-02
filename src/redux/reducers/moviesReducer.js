import {LOAD_MOVIES} from "../action/actionType";

let initialState = {movies:[]};
const moviesReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_MOVIES:
            return {...state,movies:[...action.payload]}
        default:
            return state
    }
}
export {moviesReducer}