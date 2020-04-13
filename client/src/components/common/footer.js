import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';

const Footer = ({history}) => {
    const SCROLL_UP_BUTTON_APPEAR_POS = 200;
    const [scrollActive, setScrollActive] = useState(false);
    const [scrollBottomFlag, setScrollBottomFlag] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    
    useEffect(() => {
        history.listen(() => {            
            setTimeout(() => {
                setFooterBottom()
            }, 1)
        });

        setFooterBottom();
        window.addEventListener('scroll', onScroll);
    }, [])
    
    const onScroll = (e) => {
        const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
        if(scrollTop >= SCROLL_UP_BUTTON_APPEAR_POS) 
            setScrollActive(true);
        else
            setScrollActive(false);

        const scrollHeight = document.documentElement.scrollHeight;
        const innerHeight = window.innerHeight;
        const footerSize = 160;

        if(scrollHeight - innerHeight - footerSize < scrollTop) {
            setScrollBottomFlag(true);
        } else {
            setScrollBottomFlag(false);
        }
    };

    const setFooterBottom = () => {
        if(document.documentElement.scrollHeight === window.innerHeight)
            setIsScroll(true)
        else
            setIsScroll(false);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="footer_wrap" style={isScroll?  {position: 'fixed', bottom: '0px'} : {}}>
            <div className="scroll_top" onClick={scrollToTop} style={scrollActive? (scrollBottomFlag? { position: 'absolute', bottom: '160px'} : {position: 'fixed', bottom: '20px'}) : {display: 'none'}}>
                <i className="xi-caret-up-circle-o xi-2x"></i>
            </div>
            <div className="footer">
                <div className="other_site">
                    <ul className="link">
                        <li><a href="https://developers.naver.com/main/"><img src="/images/footer1.png" alt="" /></a></li>
                        <li><a href="https://techcon.naver.com/"><img src="/images/footer2.png" alt="" /></a></li>
                        <li><a href="https://deview.kr/2019"><img src="/images/footer3.png" alt="" /></a></li>
                        <li><a href="https://naver.github.io/"><img src="/images/footer4.png" alt="" /></a></li>
                        <li><a href="http://www.d2startup.com/"><img src="/images/footer5.png" alt="" /></a></li>
                        <li className="etc divide"><a href="/#"><img src="/images/mail.png" alt="" /></a></li>
                        <li className="etc"><a href="https://www.facebook.com/naverd2"><img src="/images/facebook.png" alt="" /></a></li>
                        <li className="etc"><a href="https://d2.naver.com/d2.atom"><img src="/images/atom.png" alt="" /></a></li>
                    </ul>
                </div>
                <div className="copy_right">Copyright © NAVER Corp. All Rights Reserved.</div>
            </div>
        </div>
    )
}

export default withRouter(Footer);