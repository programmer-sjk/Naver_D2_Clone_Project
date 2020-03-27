import React from 'react';
import 'css/Main.css';

const ArticleItem = ({ article }) => {
  const { title, url, urlToImg, description, createDate, count } = article;
  return (
    <div className="post_article">
      <div className="cont_post">
        <h2>
          <a href={url}>{title}</a>
        </h2>
        <div className="cont_img">
          <a href={url}>
            <img src={urlToImg} width="100%" height="100%" alt="" />
          </a>
        </div>
        <a href={url} className="post_txt_wrap">
          <div className="post_txt">{description}</div>
        </a>
        <dl>
          <dt>
            <i className="xi-time-o">
              <span className="blind">등록일</span>
            </i>
          </dt>
          <dd>{createDate}</dd>
          <dt>
            <span className="blind">|</span>
          </dt>
          <dd>
            <span className="line_bar">|</span>
          </dd>
          <dt>
            <i className="xi-eye">
              <span className="blind">카운트</span>
            </i>
          </dt>
          <dd>{count}</dd>
        </dl>
      </div>
    </div>
  );
};

export default ArticleItem;
