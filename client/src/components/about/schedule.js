import React from 'react';


const Schedule = ({schedule}) => {
    
    const splitEnter = (data) => data.split('\n');
    
    return (
        <div className="schedule">
            <div>
                <div className="schedule_img"><img src='#'/></div>
                <div className="schedule_txt">
                    <p className="title">{schedule.title}</p>
                    <p className="desc">{schedule.comment}</p>
                </div>
            </div>
            <div className="date_info">
                {splitEnter(schedule.schedule).map((v, idx) => 
                    <div key={idx}>{v}</div>
                )}
                <a href={schedule.url}>바로가기</a>
            </div>
        </div>
    )
}

export default Schedule;