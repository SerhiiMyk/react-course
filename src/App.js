import './App.css';
import MoviesList from "./components/moviesList/MoviesList";
import Header from "./components/header/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MovieInfo from "./components/movieInfo/MovieInfo";
import {useSelector} from "react-redux";

function App() {

    let mode = useSelector(state1 => {
        return state1.lightDarkModeReducer.mode.toggle
    })

    return (
        <>
            <Router>
                <Header/>
                <div className={`mainWrap${mode}`}>
                    <Switch>
                        <Route path='/' exact><MoviesList/></Route>
                        <Route path='/movieInfo/:id' component={MovieInfo}/>
                    </Switch>
                </div>
            </Router>
        </>

    );
}

export default App;
