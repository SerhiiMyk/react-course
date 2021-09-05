import MovieListCard from "../movieListCard/MovieListCard";
import './MoviesListStyle.css'
import PagePagination from "../pagination/PagePagination";
import {useState} from "react";
import Genres from "../genres/Genres";

const {useSelector, useDispatch} = require("react-redux")
const {useEffect} = require("react");
const {getMovie} = require("../../services/api.service");


function MoviesList() {

    let state = useSelector(state => {
        return state.moviesReducer.data
    })
    
    let dispatch = useDispatch();
    let movies = state.results;
    let totalPages = state.total_pages;

    let [page, setPage] = useState(1)
    let [genreId, setGenreId] = useState(28)
    let [pages, setPages] = useState(1)


    useEffect(() => {
        dispatch(getMovie(page, genreId));
        setPages(totalPages)
    }, [dispatch, page, genreId, totalPages]);

    const chosePage = (page) => {
        return setPage(page);
    }
    const choseGenre = (genreId) => {
        return setGenreId(genreId);
    }

    return (
        <div className='mainPage'>
            <div className={"genresWrap"}>
                <Genres
                    choseGenre={choseGenre}
                    setPage={setPage}/>
            </div>
            <div className='moviesListWrap'>
                <div className='moviesList'>
                    {movies && movies.map(value => <MovieListCard
                        key={value.id}
                        movie={value}
                        // poster_path={value.poster_path}
                        // title={value.title}
                        // vote_average={value.vote_average}
                        // id={value.id}
                    />)}
                </div>
            </div>
            <div>
                {pages > 1 &&
                (<PagePagination
                    chosePage={chosePage}
                    pages={pages}/>)}
            </div>

        </div>

    );
}

export default MoviesList;



