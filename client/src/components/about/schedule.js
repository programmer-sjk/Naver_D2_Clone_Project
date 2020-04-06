import React from 'react';


const Schedule = ({data}) => {
    return (
        <div className="schedule">
            <div>
                <div className="schedule_img"><img src={data.image}/></div>
                <div className="schedule_txt">
                    <p className="title">{data.title}</p>
                    <p className="desc">{data.text}</p>
                </div>
            </div>
            <div className="date_info">
                {data.date.map((v, idx) => 
                    <div key={idx}>{v}</div>
                )}
                <a href={data.link}>바로가기</a>
            </div>
        </div>
    )
}

export default Schedule;