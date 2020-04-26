import React from 'react';


const Schedule = ({schedule}) => {
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
                {schedule.date}
                <a href={schedule.url}>바로가기</a>
            </div>
        </div>
    )
}

export default Schedule;