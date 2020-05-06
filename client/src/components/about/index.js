import React, {useEffect, useState} from 'react'
import Description from 'components/common/description'
import Schedule from './schedule.js'
import History from './history.js'
import { getAxios } from 'services/axios'

import 'css/About.css';

const About = () => {

    const [histories, setHistories] = useState([]);
    const [schedules, setSchedules] = useState([]);

    const aggregateYear = datas => {
        let rets = [];
        datas.forEach(data => {
            const year = data.date.substring(0, 4);
            const ret = rets.find(ret => ret.year == year);
            if(ret) {
                ret.info = [...ret.info, data];
            } else {
                rets = [...rets, {year: year, info: [data]}]
            }
        })

        return rets;
    }

    useEffect(() => {
        (async function getSearchResult () {
            const data = await getAxios('/about');
            const schedules = data.data.scheduleList; 
            console.log(data)

            const histories = aggregateYear(data.data.historyList)

            setHistories(histories)
            setSchedules(schedules)
        })();

        //getSearchResult()
    }, [])

    const bgColor ='#0090d7';
    const title = 'About D2';
    const desc = 'D2가 개발자들과 함께 걸어온 길을 소개합니다.';
   
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
                        {schedules.map((schedule, idx) => 
                            <Schedule schedule={schedule} key={schedule.id}></Schedule>
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