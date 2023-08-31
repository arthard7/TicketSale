import React from 'react';
import styles from './Pagination.module.scss'
import ReactPaginate from "react-paginate";

type PaginationProps = {
    onChangePage: (page:number) => void;
    pageCount: number
}


const Pagination:React.FC<PaginationProps> = ({onChangePage, pageCount}) => {
    return (
        <div>
            <ReactPaginate className={styles.root}
                           breakLabel="..."
                           nextLabel=">"
                           previousLabel="<"
                           onPageChange={(event) => onChangePage(event.selected + 1)}
                           pageRangeDisplayed={4}
                           pageCount={3}
                           forcePage={pageCount - 1}

            />
        </div>
    );
};

export default Pagination;