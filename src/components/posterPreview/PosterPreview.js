export default function PosterPreview({poster_path, title}) {

    const imgUrlW300 = 'https://www.themoviedb.org/t/p/w300';
    const unavailableImg = 'https://media.comicbook.com/files/img/default-movie.png';

    return (
        <div>
            <img src={poster_path ? `${imgUrlW300}${poster_path}` : unavailableImg} alt={title}/>
        </div>
    );
}