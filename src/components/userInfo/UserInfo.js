import './UserInfoStyle.css'
import {useSelector} from "react-redux";

export default function UserInfo() {

    let mode = useSelector(state1 => {
        return state1.lightDarkModeReducer.mode.toggle
    })

    return (
        <div className={`userInfo${mode}`}>
            <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="user icon"/>
            <span>Serhii</span>

        </div>
    );
}