import React, {useState, useEffect} from 'react';

import Slideshow from './slideshow'
import Sidebar from './sidebar'

import Contents from 'components/common/contents'
import 'css/Main.css';

const Main = () => {
    const elements = [1,2,3,4,5,6,7,8,9,10];
    const [slideIdx, setSlideIdx] = useState(1);

    return (
        <div>    
            <Slideshow slideIdx={slideIdx} setSlideIdx={setSlideIdx}></Slideshow>
            <div className="main_content_wrapper">
                <div className="article">
                    {elements.map((v, idx) => <Contents key={idx}></Contents>)} 
                </div>
                <Sidebar></Sidebar>
            </div>
        </div>
    )
}

export default Main;