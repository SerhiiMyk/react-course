import './HeaderStyle.css'
import {Link} from "react-router-dom";
import UserInfo from "../userInfo/UserInfo";

export default function Header() {
    return (
        <div className='header' onClick={() =>window.scroll(0,0)}>
            <h1>MovieBar</h1>
            <Link to ={'/'}>to home page</Link>
            <UserInfo/>
        </div>
    );
}