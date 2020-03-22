import React from 'react';
import 'css/Main.css';

const Slideshow = () => {
    return (
        <div className="main_banner_wrap">
            <div className="arrow main_banner_l_arrow"></div>
            <div className="main_banner">
                <div className="slide">
                    <ul>
                        <li className="first"></li>
                        <li className="second"></li>
                        <li className="third"></li>
                        <li className="fourth"></li>
                    </ul>
                </div>
            </div>
            <div className="arrow main_banner_r_arrow"></div>
            <div className="banner_navi">
                <button className="circle"></button>
                <button className="circle"></button>
                <button className="circle"></button>
                <button className="circle"></button>
                
            </div>
        </div>
    )
}

export default Slideshow;