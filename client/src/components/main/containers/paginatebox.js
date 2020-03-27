import React from 'react';
import 'css/Main.css';

const PaginateBox = () => {
  return (
    <div class="paginate_box">
      <div class="paginate">
        <a href="/home?page=0" class="btn_num select" data-number="0">
          <span>1</span>
        </a>
        <a href="/home?page=1" class="btn_num" data-number="1">
          <span>2</span>
        </a>
        <a href="/home?page=2" class="btn_num" data-number="2">
          <span>3</span>
        </a>
        <a href="/home?page=3" class="btn_num" data-number="3">
          <span>4</span>
        </a>
        <a href="/home?page=4" class="btn_num" data-number="4">
          <span>5</span>
        </a>
        <a href="/home?page=5" class="btn_next">
          <span title="이전">다음</span>
        </a>
      </div>
    </div>
  );
};

export default PaginateBox;
