import React from 'react'
import Description from 'components/common/description'
import Content from './content.js'
import 'css/Program.css';

const Program = () => {
    const bgColor ='#00b485';
    const title = 'D2 Program';
    const desc = '가치 있는 기술 지식 생산을 돕고, 경험을 나누며, 개발자를 지원합니다.';
    const elements = [
        {
            image: '/images/deview.jpg',
            title: 'DEVIEW',
            text: '지식을 나누고 탁월함을 추구하며, 함께 성장하는 대한민국 대표 개발자 컨퍼런스',
            detail: '사이트 바로가기',
            url: 'https://deview.kr/2019'
        },
        {
            image: '/images/tech.png',
            title: 'TECH CONCERT',
            text: '주제별 기술 공유 세미나로 다양한 기술 이야기와 개발 경험을 직접 들을 수 있는 자리입니다.',
            detail: '사이트 바로가기',
            url: 'http://techcon.naver.com/'
        },
        {
            image: '/images/campus.png',
            title: 'D2 CAMPUS FEST',
            text: "대학생을 위한 오픈소스 SW 경진대회로 자신의 아이디어를 다른사람과 함께 나누고, 서로의 소스코드에 기여할 수 있는 기회를 제공합니다. 대학생들에 의해 더 많은 오픈소스, SW가 만들어지고 활용되기를 기대합니다.",
            detail: '사이트 바로가기',
            url: 'http://d2campusfest.kr/7th/'
        },
        {
            image: '/images/campus.jpg',
            title: 'D2 CAMPUS',
            text: '다른 학생 개발자에게 개발 지식을 공유할 수 있도록 실력있는 SW 동아리, 소모임, 학회, 세미나, 컨퍼런스를 지원합니다. 해당 결과물은 D2 채널을 통해 공유하고 있습니다.',
            detail: '지원 신청하기',
            url: 'https://form.office.naver.com/form/responseView.cmd?formkey=NTJmNWQxNzEtZTU3NS00ZGNhLWFmYjItOTRjMDc3M2MyYzNk&sourceId=urlshare'
        },
        {
            image: '/images/community.png',
            title: 'D2 COMMUNITY',
            text: '개발자 커뮤니티 활동이 활발하게 진행될 수 있도록 필요한 사항들을 지원하고 커뮤니티에서 만들어진 결과물이 외부 개발자들에게 쉽게 공유될 수 있는 기반을 마련하기 위해 진행하는 지원 프로그램입니다.',
            detail: '자세히 보기',
            url: 'https://d2.naver.com/program/community'
        }
    ]

    return (
        <div>
            <Description bgColor={bgColor} title={title} desc={desc}></Description>
            <div className="content_area">
                {elements.map((element, idx) => <Content data={element} key={idx}></Content>)}
            </div>
        </div>
    )
}

export default Program;