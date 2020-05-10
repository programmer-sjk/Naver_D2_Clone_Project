import React, { useState, useEffect } from 'react';
import { getAxios } from 'services/axios';
import { withRouter } from 'react-router-dom';

import 'css/Main.css';

const Sidebar = ({history}) => {
  const [top5, setTop5] = useState([]);
  const [keyword, setKeyword] = useState([]);

  useEffect(() => {
    const fetchTop = async () => {
      const response = await getAxios('/top5');
      if (response) {
        setTop5(response.data);
      }
    };
    fetchTop();
    const fetchKeyword = async () => {
      const response = await getAxios('/keyword');
      console.log(response);
      if (response) {
        setKeyword(response.data);
      }
    };
    fetchKeyword();
  }, []);

  const search = async (param) => {
    console.log(param)
    const data = await getAxios('/search?keyword=' + param);
    
    history.push({
      pathname: '/search',
      search: '?keyword=' + param,
      state: { result: data.data }
    });
  };

  return (
    <div className="sidebar">
      <h3>TOP 5</h3>
      <div className="side_list">
        <ul>
          {top5.map((item, idx) => (
            <li key={idx}>
              <a href={item.url}>
                <span className="list_num">{item.rank + 1}</span>
                <span>{item.postTitle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>TOP KEYWORDS</h3>
        <div className="keywords_list">
          {keyword.map((item, idx) => (
            <a key={idx} onClick={() => search(item.keyword)}>
              {item.keyword}
            </a>
          ))}
        </div>
      </div>
      <div className="input_mail">
        <fieldset>
          <legend>e-mail 구독신청</legend>
          <i className="xi-mail"></i>
          <form action="/" method="POST">
            <input
              type="text"
              placeholder="이메일 주소 입력"
              className="input_email"
            />
            <input
              type="submit"
              className="btn_email_request"
              value="구독하기"
            />
          </form>
          <p className="state_msg" data-email-message="true"></p>
        </fieldset>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
