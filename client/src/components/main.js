import React from 'react'

const Main = () => {
    return (
        <div className="header_section">
            <img src="/images/top_logo.png" className="main_logo"/>
            <ul>
                <li><Link to="/hello">Hello world</Link></li>
                <li><Link to="/news">D2 News</Link></li>
                <li><Link to="/program">D2 Program</Link></li>
                <li><Link to="/about">About D2</Link></li>
            </ul>
            {/*<Route path="/" component={Main} exact={true}/>*/}
            <Route path="/hello" component={Hello}/>
            <Route path="/news" component={News}/>
            <Route path="/program" component={Program}/>
            <Route path="/about" component={About}/>
        </div>
    )
}

export default Main;