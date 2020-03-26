import React from 'react'
import Description from 'components/common/description'
import Contents from 'components/common/contents'
import 'css/News.css';

const News = () => {
    const bgColor ='#0ebb6b';
    const title = 'D2 News';
    const desc = 'D2가 응원하는 개발자 행사 소식과 산출물들을 공유합니다.';
    
    const elements = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div>
            <Description bgColor={bgColor} title={title} desc={desc}></Description>
            <div className="content_wrapper">
                {elements.map((v, idx) => <Contents key={idx}></Contents>)}
            </div>
        </div>
    )
}

export default News;