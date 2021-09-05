export default function MovieInfo({location:{state:{vote_average,overview,backdrop_path,genre_ids,title}}}) {



    return (
        <div>
            {title}
            <br/>
            {overview}

        </div>
    );
}