import React from 'react'
import Description from 'components/common/description'

const About = () => {
    const bgColor ='#0090d7';
    const title = 'About D2';
    const desc = 'D2가 개발자들과 함께 걸어온 길을 소개합니다.';

    return (
        <div>
            <Description bgColor={bgColor} title={title} desc={desc}></Description>
            About D2
        </div>
    )
}

export default About;