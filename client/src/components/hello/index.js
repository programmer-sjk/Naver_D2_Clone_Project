import React, { useState, useEffect } from 'react';
import { getAxios } from 'services/axios';
import Description from 'components/common/description';
import PostArticle from 'components/common/postarticle';
import PaginateBox from 'components/common/paginatebox';
import 'css/Hello.css';

const Hello = () => {
  const bgColor = '#7e57cc';
  const title = 'Hello World';
  const desc =
    'NAVER 개발자들이 직접 정리한 실전 개발 경험과 지식이 담겨진 블로그';
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAxios('/helloworld');
      console.log(response);
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
      <Description bgColor={bgColor} title={title} desc={desc}></Description>
      <div id="container">
        <div className="con_area">
          <div className="contents hworld">
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

export default Hello;
