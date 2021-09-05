import './GenreBtn.css'
export default function GenreBtn({genre,choseGenre}) {

    function selectedbutton() {
        choseGenre(genre.id);
    }
  return (
    <div>
        <button onClick={selectedbutton}>{genre.name}</button>
    </div>
  );
}