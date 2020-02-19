import React from 'react';
//import logo from '/images/top_logo.png';
import './App.css';

function App() {
  return (
    <div className="header_section">
        <img src="/images/top_logo.png" className="main_logo"/>
        <ul>
            <li>Hello world</li>
            <li>D2 News</li>
            <li>D2 Program</li>
            <li>About D2</li>
        </ul>
        {/*<img className="main_logo"/>*/}
    </div>
  );
}

export default App;
