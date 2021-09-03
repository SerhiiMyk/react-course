import './MovieListCardStyle.css'

export default function MovieListCard({poster_path, title, vote_average}) {
    let imgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face' + poster_path

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
            <img src={imgUrl} alt="movie poster" onClick={onClick}/>
            <div className='title'>
                <h4>{title}</h4>
                <span className={`tag ${voteColor(vote_average)}`}>{vote_average}</span>
            </div>
        </div>
    );
}