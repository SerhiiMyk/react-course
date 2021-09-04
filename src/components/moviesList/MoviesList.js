import MovieListCard from "../movieListCard/MovieListCard";
import './MoviesListStyle.css'
const {useSelector, useDispatch} = require("react-redux");
const {useEffect} = require("react");
const {getMovie} = require("../../services/api.service");

function MoviesList() {

    let state = useSelector(state => {
        let {moviesReducer} = state;
        return moviesReducer
    })

    let dispatch = useDispatch()
    let {movies} = state
    console.log(movies)


    useEffect(() => {
        dispatch(getMovie())
    }, [dispatch])



    return (
        <div className='moviesListWrap'>
            <div className='moviesList'>
                {movies && movies.map(value => <MovieListCard
                key={value.id}
                poster_path={value.poster_path}
                title={value.title}
                vote_average={value.vote_average}
                release_date={value.release_date}
                />)}
            </div>
        </div>

    );
}

export default MoviesList;



