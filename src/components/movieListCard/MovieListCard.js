import './MovieListCardStyle.css'

export default function MovieListCard({poster_path, title, vote_average, release_date}) {
    const imgUrlW300 = 'https://www.themoviedb.org/t/p/w300'
    const unavailableImg = 'https://t3.ftcdn.net/jpg/01/32/17/30/360_F_132173009_6W4ubzuxW8g4NY8yN9KSKCsgXM587Pl3.jpg'

    function onClick() {
        console.log('yra');
    }

    const voteColor = (vote) => {
        if (vote >= 8) {
            return "green";
        } else if (vote >= 6) {
            return "orange";
        } else {
            return "red"
        }
    };

    return (
        <div className='movieCard'>
            <img src={poster_path?`${imgUrlW300}${poster_path}`: unavailableImg} alt={title} onClick={onClick}/>
            <div className='title'>
                <p>{title}</p>
            </div>
            <div className='cardInfo'>
                <p>{release_date}</p>
                <span className={`tag ${voteColor(vote_average)}`}>{vote_average}</span>
            </div>
        </div>
    );
}