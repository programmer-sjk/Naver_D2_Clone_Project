import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import 'css/App.css';

import Main from 'components/main';
import Hello from 'components/hello';
import News from 'components/news';
import Program from 'components/program';
import About from 'components/about';
import Search from 'components/search';
import SearchBtn from './searchBtn';

const Navigator = () => {
  const [css, setCss] = useState(false);
  const onChangeCss = () => {
    setCss(!css);
  };
  return (
    <div>
      <div className="header_section">
        <div className="logo_section">
          <Link to="/">
            <img src="/images/top_logo.png" className="main_logo" alt="" />
          </Link>
        </div>
        <div className="navi">
          <div
            className={`btn_lnb_menu ${css ? 'open' : 'close'}`}
            onClick={onChangeCss}
          >
            <a href="#">
              <span className="blind">메뉴</span>
            </a>
          </div>
          <div className={`ul_list ${css ? 'open' : 'close'}`}>
            <ul className="navi_ul">
              <li className="txt">
                <Link to="/hello">Hello world</Link>
              </li>
              <li className="txt">
                <Link to="/news">D2 News</Link>
              </li>
              <li className="txt">
                <Link to="/program">D2 Program</Link>
              </li>
              <li className="txt">
                <Link to="/about">About D2</Link>
              </li>
            </ul>
          </div>
        </div>
        <SearchBtn></SearchBtn>
      </div>
      <div className="clear"></div>
      <div>
        <Route path="/" component={Main} exact={true} />
        <Route path="/hello" component={Hello} />
        <Route path="/news" component={News} />
        <Route path="/program" component={Program} />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
      </div>
    </div>
  );
};

export default Navigator;
