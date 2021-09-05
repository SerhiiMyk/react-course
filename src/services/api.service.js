import axios from "axios";
import {loadGenres, loadMovies} from "../redux/action";


const instance = axios.create({

    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQyOTUzNjEyYzcyYzQ1YTg3NmQyYTQ5NDcxYTA3OSIsInN1YiI6IjYxMmZkYWE0NmEzNDQ4MDA5MGY1NjA5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M4XsfMMbY-Q8udTjAOvFWRYVJy9j2yFMsBeh_e05fgk'
    }
});

const getMovie = (page,genreId) => async (dispatch,) => {
    let response = await instance.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_genres=${genreId}`);
    dispatch(loadMovies(response.data))
}


const getGenre = () => async (dispatch) => {
    let response = await instance.get('/genre/movie/list');
    dispatch(loadGenres(response.data.genres))
}

export {getMovie, getGenre}

