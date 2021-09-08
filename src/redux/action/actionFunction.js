import {LOAD_GENRES, LOAD_MOVIES, SEARCH, SWITCH_MODE} from "./actionType";

const loadMovies = (payload)=>{
    return{type:LOAD_MOVIES,payload}
}
const loadGenres = (payload)=>{
    return{type:LOAD_GENRES,payload}
}
const switchMode = (payload)=>{
    return{type:SWITCH_MODE,payload}
}
const loadSearchMovies = (payload)=>{
    return{type:SEARCH,payload}
}

export {loadMovies,loadGenres,switchMode,loadSearchMovies}