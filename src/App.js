import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
    console.log(action);
    switch (action.type){
        case 'INC':
            return {...state, [action.key]: state[action.key] + 1};
        case 'DEC':
            return {...state, [action.key]: state[action.key] - 1};
        default:
            return state;
    }
}

function App() {
    const initialValue = {a: 0, b: 0, c: 0}

    let [{a, b, c}, dispatch] = useReducer(reducer, initialValue);

    const increment = (type, key, objKey) => {
        if (objKey >= 10) return;
        dispatch({type , key})
    }

    const decrement = (type, key, objKey) => {
        if (objKey <= 0) return;
        dispatch({type , key})
    }

    return (
        <div>

            <h2>{a}</h2>
            <button onClick={() => increment('INC', 'a', a)}>+</button>
            <button onClick={() => decrement( 'DEC',  'a', a)}>-</button>

            <h2>{b}</h2>
            <button onClick={() => dispatch({key: 'b', type: 'INC'})}>+</button>
            <button onClick={() => dispatch({key: 'b', type: 'DEC'})}>-</button>

            <h2>{c}</h2>
            <button onClick={() => dispatch({key: 'c', type: 'INC'})}>+</button>
            <button onClick={() => dispatch({key: 'c', type: 'DEC'})}>-</button>

        </div>
    );
}

export default App;
