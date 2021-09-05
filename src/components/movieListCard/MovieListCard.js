import './MovieListCardStyle.css'
import ReactStars from "react-rating-stars-component";

export default function MovieListCard({poster_path, title, vote_average, release_date}) {
    const imgUrlW300 = 'https://www.themoviedb.org/t/p/w300'
    const unavailableImg = 'https://media.comicbook.com/files/img/default-movie.png'

    function onClick() {
        console.log('yra');
    }

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
            <img src={poster_path ? `${imgUrlW300}${poster_path}` : unavailableImg} alt={title} onClick={onClick}/>
            <div className='title'>
                <p>{title}</p>
            </div>
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