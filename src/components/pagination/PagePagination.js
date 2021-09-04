import {Pagination} from "@material-ui/lab";
import './PaginationItemStyle.css'

export default function PaginationItem({chosePage}) {
    const changePage = (e) => {
        let page = e.target.textContent
        chosePage(page);
    }
    let numOfPage = 500
    return (
        <div className='pagination'>
            <Pagination
                count={numOfPage}
                shape='rounded'
                onChange={changePage}
            />
        </div>
    );
}
