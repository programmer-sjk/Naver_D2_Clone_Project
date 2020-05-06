import React from 'react';
import { withRouter } from 'react-router-dom';
import { getAxios } from 'services/axios'

const SearchBtn = ({ history }) => {
  let param = null;

  const search = async () => {
    const data = await getAxios('/search?keyword=' + param);
    
    history.push({
      pathname: '/search',
      search: '?keyword=' + param,
      state: { result: data.data }
    });
  };

  return (
    <div className="search_input">
      <input
        type="text"
        placeholder="D2에서 검색"
        className="search_txt"
        onChange={(e) => (param = e.target.value)}
      />
      <div className="searchBox">
        <button className="searchBtn" onClick={search}></button>
      </div>
    </div>
  );
};

export default withRouter(SearchBtn);
