import React, {useState, useEffect} from 'react';

const Slideshow = ({slideIdx, setSlideIdx}) => {
    const MIN_SLIDE_IDX = 1;
    const MAX_SLIDE_IDX = 4;
    let timer;

    const [slideImg, setSlideImg] = useState(`/images/banner1.png`);
    useEffect(() => {
        setSlideImg(`/images/banner${slideIdx}.png`)
        
        timer = setInterval(() => {
            setSlideShowImg();
        }, 4000);

        return () => {
            clearInterval(timer);
        }
    })

    const setSlideShowImg = (idx) => {
        setSlideIdx(slideIdx + idx);
        
        if(idx) {
            if(idx < 0 && slideIdx === MIN_SLIDE_IDX) 
                setSlideIdx(MAX_SLIDE_IDX)
            else if(idx > 0 && slideIdx === MAX_SLIDE_IDX) 
                setSlideIdx(MIN_SLIDE_IDX)
            else 
                setSlideIdx(slideIdx + idx)
        } else {
            slideIdx === MAX_SLIDE_IDX? setSlideIdx(1) : setSlideIdx(slideIdx + 1);
        }
    }

    return (
        <div className="main_banner_wrap">
            <div className="arrow main_banner_l_arrow" onClick={() => {setSlideShowImg(-1)}}></div>
            <img src={slideImg} width="100%" alt="" />
            <div className="arrow main_banner_r_arrow" onClick={() => {setSlideShowImg(1)}}></div>
            <div className="banner_navi">
                <button className="circle" onClick={() => {setSlideIdx(1)}}></button>
                <button className="circle" onClick={() => {setSlideIdx(2)}}></button>
                <button className="circle" onClick={() => {setSlideIdx(3)}}></button>
                <button className="circle" onClick={() => {setSlideIdx(4)}}></button>
            </div>
        </div>
    )
}

export default Slideshow;