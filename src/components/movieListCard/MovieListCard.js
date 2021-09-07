import './MovieListCardStyle.css'
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import PosterPreview from "../posterPreview/PosterPreview";

export default function MovieListCard({movie}) {

    let mode = useSelector(state1 => {
        return state1.lightDarkModeReducer.mode.toggle
    })

    let {poster_path, title, vote_average, id} = movie;

    const voteColor = (vote) => {
        if (vote >= 8) {
            return "orange";
        } else if (vote >= 6) {
            return "cornflowerblue";
        } else {
            return "grey";
        }
    };

    return (
        <div className={`movieCard${mode}`}>
            <Link to={{pathname: '/movieInfo/' + id, state: movie}}>
                <PosterPreview
                    poster_path={poster_path}
                    title={title}/>
            </Link>
            <div className={`title${mode}`}>
                <p>{title}</p>
            </div>
            <hr/>
            <div className='cardInfo'>
                <ReactStars
                    value={vote_average}
                    count={10}
                    size={24}
                    isHalf={true}
                    activeColor="red"
                    edit={false}
                />
                <span className={`tag ${voteColor(vote_average)}`}>{vote_average}</span>
            </div>
        </div>
    );
}