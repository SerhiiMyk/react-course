import './HeaderStyle.css'
import {Link} from "react-router-dom";
import UserInfo from "../userInfo/UserInfo";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {loadSearchMovies, switchMode} from "../../redux/action/actionFunction";

export default function Header() {

    let dispatch = useDispatch();
    let [toggle, setToggle] = useState("Light");
    let [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(switchMode({toggle}));
    }, [dispatch, toggle]);

    function choseMode() {
        if (toggle === "Light") {
            setToggle("Dark");

        } else if (toggle === "Dark") {
            setToggle("Light");
        }
    }

    function handleOnSubmit(e) {
        e.preventDefault();
            dispatch(loadSearchMovies({search}));
            setSearch('');
    }

    function handleOnInput(e) {
        setSearch(e.target.value);
    }

    return (
        <div className={`header${toggle}`} onClick={() => window.scroll(0, 0)}>
            <h1>MovieBar</h1>
            <Link to={'/'}>
                <button>HOME</button>
            </Link>
            <form onSubmit={handleOnSubmit}>
                <input className={`search${toggle}`}
                       type="text"
                       value={search}
                       placeholder="Search..."
                       onInput={handleOnInput}
                />
            </form>
            <button onClick={choseMode}>light/dark mode</button>
            <UserInfo/>
        </div>
    );
}