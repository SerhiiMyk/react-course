import Users from "./components/users/Users";
import './App.css'
import A from "./components/А/A";
import {createContext} from "react";

export let MyContext = createContext();     //формує об'єкт який є насправді компонентою

export default function App() {

    return (
        <div>


            <MyContext.Provider value={'hello'}>  {/*// формує значення яке можна*/}
                                                     {/*отримати на дочірніх елементах*/}
                <A/>

            </MyContext.Provider>

            {/*<Users/>*/}
            {/*  <hr/>*/}

        </div>
    );
}




