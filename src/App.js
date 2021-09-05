import './App.css';
import MoviesList from "./components/moviesList/MoviesList";
import Header from "./components/header/Header";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <div className='mainWrap'>
                    <MoviesList/>
                    {/*<Route path='/mainPage' component={MoviesList} exact/>*/}
                    {/*<Route path='/movieInfo' component={MovieInfo}/>*/}
                </div>
            </BrowserRouter>
        </>

    );
}

export default App;
