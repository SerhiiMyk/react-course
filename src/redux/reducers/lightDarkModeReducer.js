import {SWITCH_MODE} from "../action/actionType";

let initialState = {mode: {}};
const lightDarkModeReducer = (state = initialState, action) => {
    switch (action.type){
        case SWITCH_MODE:
            return {...state,mode:{...action.payload}}
        default:
            return state
    }
}
export {lightDarkModeReducer}