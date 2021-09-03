import './App.css';
import MoviesList from "./components/moviesList/MoviesList";
import Header from "./components/header/Header";

function App() {

    return (
        <>
            <Header/>
            <div className='mainWrap'>
                <MoviesList/>
            </div>
        </>

    );
}

export default App;
