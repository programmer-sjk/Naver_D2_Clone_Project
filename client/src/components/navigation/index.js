import React, {useEffect} from 'react';
import { Route, Link } from 'react-router-dom';
import 'css/App.css';

import Main from 'components/main';
import Hello from 'components/hello';
import News from 'components/news';
import Program from 'components/program';
import About from 'components/about';
import Search from 'components/search'; 
import SearchBtn from './searchBtn'

const Navigator = () => {
  return (
    <div>
      <div className="header_section">
        <ul className="navi_ul">
          <li>
            <Link to="/">
              <img src="/images/top_logo.png" className="main_logo" />
            </Link>
          </li>
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
