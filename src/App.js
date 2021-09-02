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


    return (
        <div>
            {/*{movies.map(value => <img src={value.poster_path} alt=""/>)}*/}
            {/*{genres.map(value => <div key={value.id}>{value}</div>)}*/}
        </div>

    );
}

export default App;
