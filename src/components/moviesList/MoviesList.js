import MovieListCard from "../movieListCard/MovieListCard";
import './MoviesListStyle.css'
import PagePagination from "../pagination/PagePagination";
import {useState} from "react";
import StarsRating from "../starsRating/StarsRating";

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

    let [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getMovie(page))
    }, [dispatch, page])

    const chosePage = (page) => {
        return setPage(page)
    }
    let rating
    return (
        <div>
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
            <div>
                <PagePagination
                    chosePage={chosePage}/>
            </div>
            <StarsRating/>
        </div>

    );
}

export default MoviesList;



