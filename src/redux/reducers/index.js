import {genresReducer} from "./genresReducer";
import {moviesReducer} from "./moviesReducer";
import {combineReducers} from 'redux'


let reducer = combineReducers ({moviesReducer,genresReducer})

export {reducer}