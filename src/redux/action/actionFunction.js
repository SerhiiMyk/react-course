import {LOAD_GENRES, LOAD_MOVIES, SWITCH_MODE} from "./actionType";

const loadMovies = (payload)=>{
    return{type:LOAD_MOVIES,payload}
}
const loadGenres = (payload)=>{
    return{type:LOAD_GENRES,payload}
}
const switchMode = (payload)=>{
    return{type:SWITCH_MODE,payload}
}

export {loadMovies,loadGenres,switchMode}