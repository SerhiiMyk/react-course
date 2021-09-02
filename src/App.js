import './App.css';
import {useEffect, useState} from "react";
import {getGenre, getMovie} from "./services/api.service";
import {useDispatch, useSelector} from "react-redux";

function App() {

    let state = useSelector(state => {
        let {moviesReducer} = state;
        return moviesReducer
    })

    let dispatch = useDispatch()
    let {movies} = state
    console.log(movies)


    useEffect(() => {
        dispatch(getMovie())
        // dispatch(getGenre())

    }, [])

    let imgUrl ='https://www.themoviedb.org/t/p/w220_and_h330_face'

    return (
        <div>
            {movies.map(value => <img src={imgUrl+value.poster_path} alt=""/>)}
            {/*{genres.map(value => <div key={value.id}>{value}</div>)}*/}
        </div>

    );
}

export default App;
