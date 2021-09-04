import axios from "axios";
import {loadGenres, loadMovies} from "../redux/action";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
});

const getMovie = () => async (dispatch) =>{
    let response = await instance.get('/discover/movie');
    dispatch(loadMovies(response.data.results))}


const getGenre = () => async (dispatch) =>{
    let response = await instance.get('/genre/movie/list');
    dispatch(loadGenres(response.data.genres))}

export {getMovie, getGenre}