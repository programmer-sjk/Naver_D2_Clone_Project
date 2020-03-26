import React from 'react'
import Description from 'components/common/description'
import Contents from 'components/common/contents'
import 'css/Hello.css';

const Hello = () => {
    const bgColor ='#7e57cc';
    const title = 'Hello World';
    const desc = 'NAVER 개발자들이 직접 정리한 실전 개발 경험과 지식이 담겨진 블로그';

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

export default Hello;