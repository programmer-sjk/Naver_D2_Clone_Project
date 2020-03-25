import React, {useState, useEffect} from 'react';
import 'css/Main.css';
import 'XEIcon/xeicon.min.css';

const Contents = () => {
    return (
        <div className="content_container">
            <div className="left_section">
                <div className="text_section">
                    <div className="title">2020 NAVER CAMPUS HACKDAY 안내</div> 
                    <div className="preview">네이버 개발자와 함께하는 대학생 해커톤! 올해도 2020 NAVER CAMPUS HACKDAY가 찾아왔어요♬ 여덟 번째 진행되는 네이버 캠퍼스 핵데이! NAVER, NBP, NAVER WEBTOON의 개발자가 제안한 여러 가지 주제의 프로젝트를 개발하면서 현업에서는 실제로 어떤 프로세스로 개발하는지 짧게나마 경험해보고 기술 멘토로부터 기술 실력을 성장할 수 있는 시간입니다.</div>
                    <div className="info">
                        <div className="post_date"> <i className="xi-time-o"></i> 2020.03.16</div>
                        <span className="delimeter"> | </span>
                        <div className="view_count"> <i className="xi-eye"> </i> 1510</div>
                    </div>
                </div>
                <div className="pre_img"><img src="/images/banner1.png" width="170px" height="120px"/></div>
            </div>
        </div>
    )
}

export default Contents;