import React, {useState, useEffect} from 'react';
import 'css/Main.css';

const Slideshow = () => {
    const MIN_SLIDE_IDX = 1;
    const MAX_SLIDE_IDX = 4;

    const [slideImg, setSlideImg] = useState('/images/banner1.png');
    const [slideIdx, setSlideIdx] = useState(1);
    
    const setSlideShowImg = (idx) => {
        if(idx) {
            if(idx < 0 && slideIdx === MIN_SLIDE_IDX) {
                console.log('min')
                setSlideIdx(MAX_SLIDE_IDX)
            }
            else if(idx > 0 && slideIdx === MAX_SLIDE_IDX) {
                console.log('max')
                setSlideIdx(MIN_SLIDE_IDX)
            }
            else {
                console.log('normal:'+idx, 'pre:' + slideIdx, 'after:' + (slideIdx + 1))
                setSlideIdx(slideIdx + idx)
            }
        } else {
            console.log(slideIdx, MAX_SLIDE_IDX)
            slideIdx === MAX_SLIDE_IDX? setSlideIdx(1) : setSlideIdx(slideIdx + 1);
        }
        
        setSlideImg(`/images/banner${slideIdx}.png`)
    }
    
    const setSchedule = () => {
        setInterval(() => {
            //setSlideShowImg()
        }, 4000)
    }

    useEffect(() => {
        

        setSchedule()
    }, [])

    return (
        <div className="main_banner_wrap">
            <div className="arrow main_banner_l_arrow" onClick={() => {setSlideShowImg(-1)}}></div>
            <img src={slideImg} width="100%" />
            <div className="arrow main_banner_r_arrow" onClick={() => {setSlideShowImg(1)}}></div>
            <div className="banner_navi">
                <button className="circle" onClick={() => {setSlideImg(`/images/banner1.png`)}}></button>
                <button className="circle" onClick={() => {setSlideImg(`/images/banner2.png`)}}></button>
                <button className="circle" onClick={() => {setSlideImg(`/images/banner3.png`)}}></button>
                <button className="circle" onClick={() => {setSlideImg(`/images/banner4.png`)}}></button>
            </div>
        </div>
    )
}

export default Slideshow;