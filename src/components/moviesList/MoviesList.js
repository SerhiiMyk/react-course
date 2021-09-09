import MovieListCard from "../movieListCard/MovieListCard";
import './MoviesListStyle.css'
import PagePagination from "../pagination/PagePagination";
import {useState} from "react";
import Genres from "../genres/Genres";
import {createTheme, MuiThemeProvider} from "@material-ui/core";

const {useSelector, useDispatch} = require("react-redux")
const {useEffect} = require("react");
const {getMovie} = require("../../services/api.service");


function MoviesList() {

    let dispatch = useDispatch();

    let state = useSelector(state => {
        return state.moviesReducer.data
    });
    let mode = useSelector(state => {
        return state.lightDarkModeReducer.mode.toggle
    });
    let search = useSelector(state => {
        return state.searchReducer.value.search
    });

    let movies = state.results;
    let totalPages = state.total_pages;

    console.log(movies);

    let [page, setPage] = useState(1);
    let [genreId, setGenreId] = useState(28);
    let [pages, setPages] = useState(1);

    useEffect(() => {
        dispatch(getMovie(page, genreId,search));
        setPages(totalPages);
    }, [dispatch, page, genreId, totalPages,search]);

    const chosePage = (page) => {
        return setPage(page);
    }
    const choseGenre = (genreId) => {
        return setGenreId(genreId);
    }
    const theme = createTheme({
        palette: {
            type: mode && mode.toLowerCase()
        }
    })
    return (
        <div className='mainPage'>
            <div className={"genresWrap"}>
                <Genres
                    choseGenre={choseGenre}
                    setPage={setPage}/>
            </div>
            {movies && <div className='moviesListWrap'>
                <div className='moviesList'>
                    {movies && movies.map(value => <MovieListCard
                        key={value.id}
                        movie={value}
                    />)}
                </div>
            </div>}

            {movies<1 && <div className={`searchError${mode}`}>
                <p>No results were found for your search</p>
                <p>please try again...</p>
            </div>}
            <div>
                <MuiThemeProvider theme={theme}>
                    {pages > 1 &&
                    (<PagePagination
                        chosePage={chosePage}
                        pages={pages}/>)}
                </MuiThemeProvider>
            </div>
        </div>
    );
}

export default MoviesList;



