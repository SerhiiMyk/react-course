import './MovieListCardStyle.css'
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";

export default function MovieListCard({movie}) {
    const imgUrlW300 = 'https://www.themoviedb.org/t/p/w300'
    const unavailableImg = 'https://media.comicbook.com/files/img/default-movie.png'

    let {poster_path, title, vote_average, id} = movie

    const voteColor = (vote) => {
        if (vote >= 8) {
            return "orange";
        } else if (vote >= 6) {
            return "cornflowerblue";
        } else {
            return "grey"
        }
    };

    return (
        <div className='movieCard'>
            <Link to={{pathname: '/movieInfo/' + id,state:movie}}><img
                src={poster_path ? `${imgUrlW300}${poster_path}` : unavailableImg} alt={title}/></Link>
            <div className='title'>
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