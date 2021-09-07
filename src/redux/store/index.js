import {applyMiddleware, createStore} from "redux";
import ReduxThunk from "redux-thunk";
import {reducer} from "../reducers";


export let store = createStore(reducer, applyMiddleware(ReduxThunk));