import './App.css';
import MoviesList from "./components/moviesList/MoviesList";
import Header from "./components/header/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MovieInfo from "./components/movieInfo/MovieInfo";

function App() {

    return (
        <>
            <Router>
                <Header/>
                <div className='mainWrap'>
                    <Switch>
                        <Route path='/movieInfo/:id' component={MovieInfo}/>
                        <Route path='/' exact component={MoviesList}/>
                    </Switch>
                </div>
            </Router>
        </>

    );
}

export default App;
