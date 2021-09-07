import './MoreInfoStyle.css'
import ReactStars from "react-rating-stars-component";
import {useState} from "react";
import {useSelector} from "react-redux";

export default function MovieInfo({location: {state: {vote_average, overview, backdrop_path, genre_ids, title, release_date}}}) {

    let state = useSelector(state => {
        let {genresReducer} = state;
        return genresReducer
    })
    let mode = useSelector(state1 => {
        return state1.lightDarkModeReducer.mode.toggle
    })

    let {genres} = state;

    const imgUrlW500 = 'https://image.tmdb.org/t/p/w500';
    const unavailableImg = 'https://media.comicbook.com/files/img/default-movie.png';

    let [newRating, setNewRating] = useState(vote_average);

    const ratingChanged = (newRating) => {
        return setNewRating(newRating);
    };

    let thisMovieGenres = [];

    genres.map((genre) => {
        genre_ids.filter(function (id) {
            if (id === genre.id) {
                thisMovieGenres.push(genre.name);
            }
        })
    })

    return (
        <div className={`movieInfoWrap${mode}`}>
            <div className={`movieInfoTitle${mode}`}>
                <p>{title}</p>
            </div>
            <div className='infoBox'>
                <div className='infoImg'>
                    <img src={backdrop_path ? `${imgUrlW500}${backdrop_path}` : unavailableImg} alt={title}/>
                </div>
                <div className={`infoDetails${mode}`}>
                    <div className={`rating${mode}`}>
                        <ReactStars
                            value={vote_average}
                            count={10}
                            size={24}
                            isHalf={true}
                            activeColor="red"
                            edit={true}
                            onChange={ratingChanged}
                        />
                        <p>{newRating}</p>
                    </div>
                    <span>OVERVIEW:</span>
                    <p>{overview}</p>
                    <span>RELESE DATE:</span>
                    <p>{release_date}</p>
                    <div className={`thisMovieGenres${mode}`}>
                        <p>GENRES:</p>
                        {thisMovieGenres.map(value => <span>{value}</span>)}
                    </div>
                </div>
            </div>

        </div>
    );
}
