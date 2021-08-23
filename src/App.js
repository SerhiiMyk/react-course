import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Cars from "./cars/Cars";
import CreateCar from "./create-car/CreateCar";

function App() {
  return (
      <Router>
        <div>
          <Link to = {'/cars'}>show cars</Link>
            <br/>
          <Link to = {'/create-car'}>create-car</Link>
        </div>
        <Route path={'/cars'} component={Cars}/>
        <Route path={'/create-car'} component={CreateCar}/>
      </Router>

  );
}

export default App;


// Є наступні лінки, та дії закріплені за ними
// /cars - отримати всі автівки та вивести їх
// /create-car - сторінка з формою створення нового авто
// Додатково
// /update-car - сторінка з двома формами - 1 форма з select, в якій  можна обрати яку автівку редагувати. Після вибору
// поточні данні про авто з'являються на другій формі, пілся редагування яких і відправки автівка оновлюється на сервері.