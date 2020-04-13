import React from 'react';
import 'css/Main.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>TOP 5</h3>
      <div className="side_list">
        <ul>
          <li>
            <a href="/news/3435170">
              <span className="list_num">1</span>
              <span>백엔드 개발자를 꿈꾸는 학생개발자에게</span>
            </a>
          </li>
          <li>
            <a href="/helloworld/2047663">
              <span className="list_num">2</span>
              <span>네이버 검색의 SRE 시스템</span>
            </a>
          </li>
          <li>
            <a href="/helloworld/8540176">
              <span className="list_num">3</span>
              <span>flexbox로 만들 수 있는 10가지 레이아웃</span>
            </a>
          </li>
          <li>
            <a href="/helloworld/6080222">
              <span className="list_num">4</span>
              <span>
                Spring WebFlux와 Armeria를 이용하여 Microservice에 필요한
                Reactive + RPC 동시에 잡기
              </span>
            </a>
          </li>
          <li>
            <a href="/helloworld/0145894">
              <span className="list_num">5</span>
              <span>
                2019년과 이후 JavaScript의 동향 - 라이브러리와 프레임워크 1
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>TOP KEYWORDS</h3>
        <div className="keywords_list">
          <a href="/#">JavaScript</a>
          <a href="/#">빅데이터</a>
          <a href="/#">분산처리</a>
          <a href="/#">Golang</a>
          <a href="/#">Scala</a>
        </div>
      </div>
      <div className="input_mail">
        <fieldset>
          <legend>e-mail 구독신청</legend>
          <i className="xi-mail"></i>
          <form action="/" method="POST">
            <input
              type="text"
              placeholder="이메일 주소 입력"
              className="input_email"
            />
            <input
              type="submit"
              className="btn_email_request"
              value="구독하기"
            />
          </form>
          <p className="state_msg" data-email-message="true"></p>
        </fieldset>
      </div>
    </div>
  );
};

export default Sidebar;
