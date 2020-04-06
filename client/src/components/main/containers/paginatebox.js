import React from 'react';
import 'css/Main.css';

const PaginateBox = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) {
    return null;
  }

  const pages = [...Array(pageCount).keys()].map((i) => i + 1);
  return (
    <div class="paginate_box">
      <div class="paginate">
        {pages.map((page) => (
          <a
            // href="/home?page={page}"
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
