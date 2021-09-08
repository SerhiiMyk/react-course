import {loadSearchMovies} from "../../redux/action";
import {useDispatch} from "react-redux";

export default function GenreBtn({genre, choseGenre}) {
    let dispatch = useDispatch();
    function selectedbutton() {
        choseGenre(genre.id);
        dispatch(loadSearchMovies({NaN}));
    }
    return (
        <div>
            <button onClick={selectedbutton}>{genre.name}</button>
        </div>
    );
}