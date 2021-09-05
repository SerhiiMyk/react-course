import './HeaderStyle.css'
import {Link} from "@material-ui/core";

export default function Header() {
    return (
        <div className='header' onClick={() =>window.scroll(0,0)}>
            <h1>MovieBar</h1>
            <Link to={'/'}>back Home</Link>
        </div>
    );
}