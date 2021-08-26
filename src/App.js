import './App.css';
import {useReducer} from "react";
import {reducer} from "./reducers/reducer";
import './App.css'

function App() {
    const initialValue = {a: 0, b: 0, c: 0}

    let [{a, b, c}, dispatch] = useReducer(reducer, initialValue);

    return (
        <div>
            <h1>Counters</h1>
            <div className={'wrap'}>
                <div className={'counter'}>
                    <h1>{a}</h1>
                    <button onClick={() => dispatch({key: 'a', type: 'DEC'})}>-</button>
                    <button onClick={() => dispatch({key: 'a', type: 'INC'})}>+</button>
                </div>
                <div className={'counter'}>
                    <h1>{b}</h1>
                    <button onClick={() => dispatch({key: 'b', type: 'DEC'})}>-</button>
                    <button onClick={() => dispatch({key: 'b', type: 'INC'})}>+</button>
                </div>
                <div className={'counter'}>
                    <h1>{c}</h1>
                    <button onClick={() => dispatch({key: 'c', type: 'DEC'})}>-</button>
                    <button onClick={() => dispatch({key: 'c', type: 'INC'})}>+</button>
                </div>
            </div>
        </div>
    );
}

export default App;
