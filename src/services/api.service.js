import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQyOTUzNjEyYzcyYzQ1YTg3NmQyYTQ5NDcxYTA3OSIsInN1YiI6IjYxMmZkYWE0NmEzNDQ4MDA5MGY1NjA5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M4XsfMMbY-Q8udTjAOvFWRYVJy9j2yFMsBeh_e05fgk'
    }
});

let getMovie = async () =>await instance.get('/discover/movie');
let getGenre = async () =>await instance.get('/genre/movie/list');




export {getMovie, getGenre}