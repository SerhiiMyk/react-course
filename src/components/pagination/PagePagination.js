import {Pagination} from "@material-ui/lab";
import './PaginationItemStyle.css'

// export default function PagePagination({setPage,numOfPage=1}) {
export default function PaginationItem() {
  const changePage = (page)=>{
    // setPage(page);
    // window.scroll(0,0)
      console.log(page);
  }
    let numOfPage=10
  return (
    <div className='pagination'>
      <Pagination
          count={numOfPage}
          shape='rounded'
          onChange={(e)=>changePage(e.target.textContent)}
      />

    </div>
  );
}
