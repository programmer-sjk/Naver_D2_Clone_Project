import React, { useState } from 'react';
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
  const sampleArticles = [
    {
      title: '2020 NAVER CAMPUS HACKDAY 안내',
      url: '/news/6826105',
      urlToImg: '/content/images/2020/03/github-1.jpg',
      description: `네이버 개발자와 함께하는 대학생 해커톤! 올해도 2020 NAVER CAMPUS
          HACKDAY가 찾아왔어요♬ 여덟 번째 진행되는 네이버 캠퍼스 핵데이!
          NAVER, NBP, NAVER WEBTOON의 개발자가 제안한 여러 가지 주제의
          프로젝트를 개발하면서 현업에서는 실제로 어떤 프로세스로 개발하는지
          짧게나마 경험해보고 기술 멘토로부터 기술 실력을 성장할 수 있는
          시간입니다. 더불어 이번 네이버 캠퍼스 핵데이 우수 참가자로 선발되면
          하계 채용형 인턴십`,
      createDate: '2020.03.16',
      count: 129,
    },
  ];

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
              articles={sampleArticles}
              pageSize={pageSize}
              currentPage={currentPage}
            />
            <PaginateBox
              itemsCount={sampleArticles.length}
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
