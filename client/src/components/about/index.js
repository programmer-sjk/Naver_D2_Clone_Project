import React from 'react'
import Description from 'components/common/description'
import 'css/About.css';

const About = () => {
    const bgColor ='#0090d7';
    const title = 'About D2';
    const desc = 'D2가 개발자들과 함께 걸어온 길을 소개합니다.';

    return (
        <div>
            <Description bgColor={bgColor} title={title} desc={desc}></Description>
            <div className="content_area">
                <div className="about_schedule">
                    <h2> 2020 주요 일정 </h2>
                    <button className="btn_history">D2 히스토리 바로가기</button>
                </div>
                
            </div>
        </div>
    )
}

export default About;