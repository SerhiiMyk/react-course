import './App.css';
import {useEffect, useState} from "react";
import {getGenre, getMovie} from "./services/api.service";

function App() {

    let [movies, setMovies] = useState([])
    let [genre, setGenre] = useState([])

    useEffect(() => {
        getMovie().then(value =>setMovies([...value.data.results]))
        getGenre().then(value =>setGenre([...value.data.genres]))
    }, [])

    return (
        <div>
            {movies.map(value => <div key={value.id}>{value.title}</div>)}
            {genre.map(value => <div key={value.id}>{value.name}</div>)}

        </div>

    );
}

export default App;
