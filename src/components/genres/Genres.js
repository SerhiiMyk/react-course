import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getGenre} from "../../services/api.service";
import GenreBtn from "../genreBtn/GenreBtn";
import './GenresStyle.css'

export default function Genres({choseGenre}) {
    let state = useSelector(state => {
        let {genresReducer} = state;
        return genresReducer
    })

    let {genres} = state;
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenre());
    }, [dispatch]);


    return (
        <div className={'genresBtnWrap'}>
            {genres.map(value =>
                <GenreBtn
                    key={value.id}
                    genre={value}
                    choseGenre={choseGenre}
                />)}

        </div>
    );
}