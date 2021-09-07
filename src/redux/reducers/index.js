import {genresReducer} from "./genresReducer";
import {moviesReducer} from "./moviesReducer";
import {combineReducers} from 'redux'
import {lightDarkModeReducer} from "./lightDarkModeReducer";


let reducer = combineReducers ({moviesReducer,genresReducer,lightDarkModeReducer})

export {reducer}