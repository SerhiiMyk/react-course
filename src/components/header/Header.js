import './HeaderStyle.css'

export default function Header() {
    return (
        <div className='header' onClick={() =>window.scroll(0,0)}>
            <h1>MovieBar</h1>

        </div>
    );
}