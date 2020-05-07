import React from 'react';
import 'css/Main.css';

const PaginateBox = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);

  const pages = [...Array(pageCount).keys()].map((i) => i + 1);
  return (
    <div className="paginate_box">
      <div className="paginate">
        {pages.map((page, idx) => (
          <a
            href="/#" // href="/home?page={page}"
            key={idx}
            className={page === currentPage ? 'btn_num select' : 'btn_num'}
            style={{ cursor: 'pointer' }}
            data-number={page - 1}
            onClick={() => onPageChange(page)}
          >
            <span>{page}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PaginateBox;
