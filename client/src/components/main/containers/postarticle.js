import React from 'react';
import ArticleItem from './articleitem';

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const sliceItems = items.slice(startIndex, startIndex + pageSize);
  return sliceItems;
}

const PostArticle = ({ articles, pageSize, currentPage }) => {
  const article = paginate(articles, currentPage, pageSize);
  console.log(article);
  return (
    <>
      {article.map(item => (
        <ArticleItem article={item} />
      ))}
    </>
  );
};

export default PostArticle;
