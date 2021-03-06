import React from 'react';
import 'css/Main.css';

const formattingDate = (postPublishedAt) => {
  const str2date = new Date(postPublishedAt);
  const year = str2date.getFullYear();
  const month = str2date.getMonth();
  const day = str2date.getDate();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('.');
};
const ArticleItem = ({ article }) => {
  const {
    postTitle,
    url,
    postImage,
    postHtml,
    postPublishedAt,
    viewCount,
  } = article;

  const publishedAt = formattingDate(postPublishedAt);

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
          <dd>{publishedAt}</dd>
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
