import React from 'react'
import Description from 'components/common/description'
import 'css/About.css';

const About = () => {
    const bgColor ='#0090d7';
    const title = 'About D2';
    const desc = 'D2가 개발자들과 함께 걸어온 길을 소개합니다.';

    const data = {
        image: '/images/schedule1.png',
        title: 'NAVER CAMPUS HACKDAY',
        text: "NAVER 개발자와 함께하는 24시간의 해커톤",
    }
    
    return (
        <div>
            <Description bgColor={bgColor} title={title} desc={desc}></Description>
            <div className="content_area">
                <div className="about_schedule">
                    <div className="schedule_title">
                        <h2> 2020 주요 일정 </h2>
                        <button className="btn_history">D2 히스토리 바로가기</button>
                    </div>
                    <div className="schedule_list">
                        <div className="schedule">
                            <div>
                                <div className="schedule_img"><img src={data.image}/></div>
                                <div className="schedule_txt">
                                    <p className="title">{data.title}</p>
                                    <p className="desc">{data.text}</p>
                                </div>
                            </div>
                            <div className="date_info">
                                <p>20년 3월 18일 ~ 4월 2일 접수</p>
                                <p>20년 5월 21일 ~ 5월 22일 핵데이</p>
                                <p>바로가기</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About;