import './HeaderStyle.css'
import {Link} from "react-router-dom";
import UserInfo from "../userInfo/UserInfo";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {switchMode} from "../../redux/action/actionFunction";

export default function Header() {

    let dispatch = useDispatch();
    let [toggle, setToggle] = useState("Light")

    function choseMode() {
        if (toggle === "Light") {
            setToggle("Dark");

        } else if (toggle === "Dark") {
            setToggle("Light");
        }
    }

    useEffect(() => {
        dispatch(switchMode({toggle}));
    }, [dispatch,toggle])

    return (
        <div className={`header${toggle}`} onClick={() => window.scroll(0, 0)}>
            <h1>MovieBar</h1>
            <Link to={'/'}><button>HOME</button></Link>
            <button onClick={choseMode}>light/dark mode</button>
            <UserInfo/>
        </div>
    );
}