import React, { useState, useEffect } from 'react';
import { getAxios } from 'services/axios';
import Description from 'components/common/description';
import PostArticle from 'components/common/postarticle';
import PaginateBox from 'components/common/paginatebox';
import 'css/News.css';

const News = () => {
  const bgColor = '#0ebb6b';
  const title = 'D2 News';
  const desc = 'D2가 응원하는 개발자 행사 소식과 산출물들을 공유합니다.';
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAxios('/news');
      console.log(response);
      if (response.data['content']) {
        setArticles(response.data.content);
      }
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
      <Description bgColor={bgColor} title={title} desc={desc}></Description>
      <div id="container pc">
        <div className="con_area">
          <div className="contents news">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
