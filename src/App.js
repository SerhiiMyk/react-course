import './App.css';
import MoviesList from "./components/moviesList/MoviesList";
import Header from "./components/header/Header";
import PagePagination from "./components/pagination/PagePagination";
import {BrowserRouter, Route} from "react-router-dom";
import MovieInfo from "./components/movieInfo/MovieInfo";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <div className='mainWrap'>
                    <Route path='/mainPage' component={MoviesList} exact/>
                    <Route path='/movieInfo' component={MovieInfo}/>
                    <PagePagination/>
                </div>
            </BrowserRouter>
        </>

    );
}

export default App;
