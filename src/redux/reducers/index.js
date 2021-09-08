import {genresReducer} from "./genresReducer";
import {moviesReducer} from "./moviesReducer";
import {combineReducers} from 'redux'
import {lightDarkModeReducer} from "./lightDarkModeReducer";
import {searchReducer} from "./searchReducer";

let reducer = combineReducers ({moviesReducer,genresReducer,lightDarkModeReducer,searchReducer})

export {reducer}