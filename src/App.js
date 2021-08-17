import './App.css'
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {

    return (
        <div>

            <Posts/>

            {/*<Comments/>*/}

        </div>
    );
}

// 1
// Отримати всі пости з jsonplaceholder та вивести їх. до кожного поста зробити кнопку при натисканні якої виводиться біль детальна інформація про пост в середині Posts компоненти
// 2
//
// Отримати всі коментарі з jsonplaceholder та вивести їх. до кожного поста зробити кнопку при натисканні якої виводиться біль детальна інформація про коментар в середині Comments компоненти


