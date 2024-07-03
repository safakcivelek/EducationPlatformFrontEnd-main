import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    hasNext: boolean;
    hasPrevious: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, hasNext, hasPrevious }) => {
    const pageNumbers: number[] = [];
    const visiblePages = 10; // The maximum number of pages to display

    // Calculate the page numbers to be shown on the user interface
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="col-md-8 thm-padding center-pagination">
            <ul className="pagination">
                {hasPrevious && (
                    <li>
                        <a onClick={(e) => {
                            e.preventDefault();
                            onPageChange(currentPage - 1);
                        }} href="#">
                            <span className="ti ti-angle-left"></span>
                        </a>
                    </li>
                )}
                {pageNumbers.map(number => (
                    <li key={number} className={number === currentPage ? 'active' : ''}>
                        <a onClick={(e) => {
                            e.preventDefault();
                            onPageChange(number);
                        }} href="#">
                            {number}
                        </a>
                    </li>
                ))}
                {hasNext && (
                    <li>
                        <a onClick={(e) => {
                            e.preventDefault();
                            onPageChange(currentPage + 1);
                        }} href="#">
                            <span className="ti ti-angle-right"></span>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Pagination;