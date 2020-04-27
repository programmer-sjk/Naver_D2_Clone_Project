import React, { useState, useEffect } from 'react';

import Slideshow from './slideshow';
import Sidebar from './sidebar';

import { getAxios } from 'services/axios';
import PostArticle from 'components/common/postarticle';
import PaginateBox from 'components/common/paginatebox';
import 'css/Main.css';

const Main = () => {
  const [slideIdx, setSlideIdx] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAxios('/home');
      // console.log(response);
      setArticles(response.data.content);
    };
    fetchData();
  }, []);

  const onPageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Slideshow slideIdx={slideIdx} setSlideIdx={setSlideIdx}></Slideshow>
      <div id="container">
        <div className="con_area">
          <div className="contents">
            <PostArticle
              articles={articles}
              pageSize={pageSize}
              currentPage={currentPage}
            />
            <PaginateBox
              itemsCount={articles.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
