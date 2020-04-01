import React, {useState, useEffect} from 'react';

const Footer = () => {
    const [scrollActive, setScrollActive] = useState(false);

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('scroll', onScroll);
    }, [])

    const onScroll = (e) => {
        const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
        if(scrollTop >= 200) 
            setScrollActive(true);
        else
             setScrollActive(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <div className="scroll_top" style={scrollActive? {display: 'block'} : {display: 'none'}} onClick={scrollToTop}>
                <i className="xi-caret-up-circle-o xi-2x"></i>
            </div>
            <div className="footer">
                <div className="other_site">
                    <ul className="link">
                        <li><a href="https://developers.naver.com/main/"><img src="/images/footer1.png" /></a></li>
                        <li><a href="https://techcon.naver.com/"><img src="/images/footer2.png" /></a></li>
                        <li><a href="https://deview.kr/2019"><img src="/images/footer3.png" /></a></li>
                        <li><a href="https://naver.github.io/"><img src="/images/footer4.png" /></a></li>
                        <li><a href="http://www.d2startup.com/"><img src="/images/footer5.png" /></a></li>
                        <li className="etc divide"><a href=""><img src="/images/mail.png" /></a></li>
                        <li className="etc"><a href="https://www.facebook.com/naverd2"><img src="/images/facebook.png" /></a></li>
                        <li className="etc"><a href="https://d2.naver.com/d2.atom"><img src="/images/atom.png"/></a></li>
                    </ul>
                </div>
                <div className="copy_right">Copyright © NAVER Corp. All Rights Reserved.</div>
            </div>
        </div>
    )
}

export default Footer;