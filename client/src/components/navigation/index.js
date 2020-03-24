import React from 'react';
import {Route, Link} from 'react-router-dom';
import 'css/App.css';

import Main from 'components/main'
import Hello from 'components/hello'
import News from 'components/news'
import Program from 'components/program'
import About from 'components/about'


const Navigator = () => {
    return (
        <div>    
            <div className="header_section">
                <ul className="navi_ul">
                    {/*<li><Link to="/"></Link></li>*/}
                    <li><Link to="/"><img src="/images/top_logo.png" className="main_logo"/></Link></li>
                    <li><Link to="/hello">Hello world</Link></li>
                    <li><Link to="/news">D2 News</Link></li>
                    <li><Link to="/program">D2 Program</Link></li>
                    <li><Link to="/about">About D2</Link></li>
                </ul>
                <input type="text" placeholder="D2에서 검색" className="search_txt"/>
                <div className="searchBox">
                    <button className="searchBtn"></button>
                    {/* <img src="/images/top_search.png" className="search"/> */ }
                </div>
            </div>
            <div>
                {/*<Route path="/" component={Home} exact={true}/>*/}
                <Route path="/" component={Main} exact={true}/>
                <Route path="/hello" component={Hello}/>
                <Route path="/news" component={News}/>
                <Route path="/program" component={Program}/>
                <Route path="/about" component={About}/>
            </div>
        </div>
    )
}

export default Navigator;