import React from 'react'
import Description from 'components/common/description'
import 'css/Program.css';

const Program = () => {
    const bgColor ='#00b485';
    const title = 'D2 Program';
    const desc = '가치 있는 기술 지식 생산을 돕고, 경험을 나누며, 개발자를 지원합니다.';

    return (
        <div>
            <Description bgColor={bgColor} title={title} desc={desc}></Description>
            <div>
                <div className="img_box"></div>
            </div>
        </div>
    )
}

export default Program;