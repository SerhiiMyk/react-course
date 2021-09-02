import {LOAD_GENRES} from "../action/actionType";

let initialState = {genres:[]};
const genresReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_GENRES:
            return {...state,genres:[...action.payload]}
        default:
            return state
    }
}
export {genresReducer}