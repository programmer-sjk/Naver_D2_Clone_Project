import React, {useState, useEffect} from 'react';
import 'css/Main.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="other_site">
                <ul className="link">
                    <li><a href="https://developers.naver.com/main/"><img src="/images/footer1.png" /></a></li>
                    <li><a href="https://techcon.naver.com/"><img src="/images/footer2.png" /></a></li>
                    <li><a href="https://deview.kr/2019"><img src="/images/footer3.png" /></a></li>
                    <li><a href="https://naver.github.io/"><img src="/images/footer4.png" /></a></li>
                    <li><a href="http://www.d2startup.com/"><img src="/images/footer5.png" /></a></li>
                    <li><a href="http://www.d2startup.com/"><img src="/images/mail.png" /></a></li>
                    <li><a href="http://www.d2startup.com/"><img src="/images/facebook.png" /></a></li>
                    <li><a href="http://www.d2startup.com/"><img src="/images/atom.png" /></a></li>
                </ul>
            </div>
            <div className="copy_right">Copyright © NAVER Corp. All Rights Reserved.</div>
        </div>
    )
}

export default Footer;