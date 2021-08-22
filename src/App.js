import './App.css';
import UserSelectComponent from "./userSelectComponent/UserSelectComponent";
import Posts from "./posts/Posts";
import {useState} from "react";

function App() {

    let [userId,setUserId] = useState(null)

    const choseUser =(userId)=>{
        setUserId(userId)
    }
    return (
    <div>
      <div>
        {
          <UserSelectComponent
              choseUser={choseUser}/>
        }
      </div>

      <div>
        {
            userId && (<Posts userId={userId}/>)
        }
      </div>

    </div>
  );
}

export default App;


// Створити форму з select.
//     Отримати всіх юзерів з плейсхолдеру. option для кожного юзера.
//     Оборавши конкретного юзера в цьому select відтворити його пости рівні App
// Ієрархія
// App-UserSelectComponent
// App-Posts-Post
