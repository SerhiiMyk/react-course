import {Pagination} from "@material-ui/lab";
import './PaginationItemStyle.css'

export default function PaginationItem({chosePage,pages}) {
    const changePage = (e) => {
        let page = e.target.textContent
        chosePage(page);
    }
    console.log(pages);
    return (
        <div className='pagination'>
            <Pagination
                count={pages}
                shape='rounded'
                onChange={changePage}
            />
        </div>
    );
}
