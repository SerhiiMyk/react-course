import {useReducer} from "react";
import reducer from "./reducers/reducer";
import './App.css'

export default function App() {

  let [state, dispatch] = useReducer(reducer, 0); // state = {a:0,b:0}

  return (
      <div>
          <h1>Counter</h1>
          <div className={'wrap'}>
              <div className={'counter'}>
                  <h2>{state}</h2>
                  <button onClick={() => dispatch('-')}>-2</button>
                  <button onClick={() => dispatch('+')}>+10</button>
              </div>
          </div>
      </div>
  );
}
// є об'єкт, значення якого 0
// Стоврити 2 кнопки.
//     Перша збільшує   значення на 10
// Друга зменшує на 2.
//
// Зміну стану та виведення реалізувати через reducer
