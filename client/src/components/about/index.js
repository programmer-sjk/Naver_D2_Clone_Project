import React from 'react'
import Description from 'components/common/description'
import Schedule from './schedule.js'
import History from './history.js'

import 'css/About.css';

const About = () => {
    const bgColor ='#0090d7';
    const title = 'About D2';
    const desc = 'D2가 개발자들과 함께 걸어온 길을 소개합니다.';
    const datas = [
        {
            image: '/images/schedule1.png',
            title: 'NAVER CAMPUS HACKDAY',
            text: "NAVER 개발자와 함께하는 24시간의 해커톤",
            date: ['20년 3월 18일 ~ 4월 2일 접수', '20년 5월 21일 ~ 5월 22일 핵데이'],
            link: 'https://recruit.navercorp.com/naver/job/detail/developer?annoId=20003868&classId=&jobId=&entTypeCd=004&searchTxt=&searchSysComCd='
        },
        {
            image: '/images/schedule2.png',
            title: 'NAVER TECH CONCERT',
            text: "Mobile 개발을 주제로 기술 컨퍼런스 진행",
            date: ['20년 7월 예정'],
            link: 'https://techcon.naver.com/'
        },
        {
            image: '/images/schedule3.png',
            title: 'DEVIEW',
            text: "네이버 개발자 컨퍼런스",
            date: ['20년 9월 예정'],
            link: 'https://deview.kr/2019'
        }
    ]
    
    const histories = [
        {
            year: '2019',
            info: [
                {title: 'NAVER TECH CONCERT', detail: ['2019.4.11', 'FRONT END 개발 주제']},
                {title: 'NAVER CAMPUS HACKDAY', detail: ['2019.5.16~17', 'SUMMER HACKDAY 진행']}
            ]
        },
        {
            year: '2018',
            info: [
                {title: 'NAVER TECH CONCERT :ANDROID', detail: ['2018.11.1~2', '주제별 기술 공유 세미나', '안드로이드 개발을 주제로 진행']},
                {title: 'DEVIEW 2018', detail: ['2018.10.11~12', 'AI, 딥러닝, 빅데이터, 검색, AR, 블록체인 주제 강의', 'xDM platform 공개']}
            ]
        },
        {
            year: '2017',
            info: [
                {title: 'DEVIEW 2017', detail: ['2017.10.16~17', '네이버랩스 유럽, AI/머신러닝 기술적용 사례 다수 발표', '로봇 라인업 9종 공개']},
            ]
        },
        {
            year: '2016',
            info: [
                {title: 'DEVIEW 2016', detail: ['2019.4.11', 'FRONT END 개발 주제']},
                {title: 'D2 CAMPUS HACKDAY', detail: ['2016.5', '네이버 개발자들과 함께하는 1박 2일 해커톤 시작']}
            ]
        },
    ]

    const moveHistory = () => {
        window.scrollTo({top: 887, behavior:'smooth'})
    }

    return (
        <div>
            <Description bgColor={bgColor} title={title} desc={desc}></Description>
            <div className="content_area">
                <div className="about_schedule">
                    <div className="schedule_title">
                        <h2> 2020 주요 일정 </h2>
                        <button className="btn_history" onClick={moveHistory}>D2 히스토리 바로가기</button>
                    </div>
                    <div className="schedule_list">
                        {datas.map((data, idx) => 
                            <Schedule data={data} key={idx}></Schedule>
                        )}
                    </div>
                </div>
            </div>

            <div className="history_area">
                <div className="history_section">
                    <h1 align="center"> FOR DEVELOPERS, BY DEVELOPERS</h1>
                    <p> 개발자들을 위한 탁월한 지식과 경험을 공유하며 함께 성장합니다! </p>
                    <div className="history">
                        <h2>History</h2>
                        <div className="year_begin">
                            {histories.map((history, idx) => 
                                <History history={history} key={idx}></History>
                            )}                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;