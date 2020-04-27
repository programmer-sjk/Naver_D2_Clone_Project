import React from 'react';
import 'css/Main.css';

const ArticleItem = ({ article }) => {
  const {
    postTitle,
    url,
    postImage,
    postHtml,
    postPublishedAt,
    viewCount,
  } = article;
  return (
    <div className="post_article">
      <div className="cont_post">
        <h2>
          <a href={url}>{postTitle}</a>
        </h2>
        <div className="cont_img">
          <a href={url}>
            <img src={postImage} width="100%" height="100%" alt="" />
          </a>
        </div>
        <a href={url} className="post_txt_wrap">
          <div className="post_txt">{postHtml}</div>
        </a>
        <dl>
          <dt>
            <i className="xi-time-o">
              <span className="blind">등록일</span>
            </i>
          </dt>
          <dd>{postPublishedAt}</dd>
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
          <dd>{viewCount}</dd>
        </dl>
      </div>
    </div>
  );
};

export default ArticleItem;
