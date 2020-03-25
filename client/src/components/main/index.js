import React from 'react';
import Slideshow from './slideshow'
import Contents from './contents'
import Sidebar from './sidebar'
import Footer from './footer'
import 'css/Main.css';

const Main = () => {
    const elements = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div>    
            <Slideshow></Slideshow>
            <div className="content_wrapper">
                {elements.map((v, idx) => <Contents key={idx}></Contents>)}
            </div>
            <Sidebar></Sidebar>
            <Footer></Footer>
        </div>
    )
}

export default Main;