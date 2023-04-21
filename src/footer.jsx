import React from "react";
import { Link } from 'react-router-dom'

function Footer() {
    return (
        // W1260px, H190px
        <div className="footer">
            <div className="footer_in">
                <div className="left">
                    <Link to='/'><img src="/images/logo_footer.png" alt="" /></Link>
                </div>
                <div className="mid">
                    <ul className="nav">
                        <li>회사소개</li>
                        <li>공지사항</li>
                        <li>연락처</li>
                        <li>광고문의</li>
                        <li>채용</li>
                        <li>버그제보</li>
                        <li>개인정보 처리방침</li>
                        <li>서비스 이용약관</li>
                    </ul>
                    <ul className="about">
                        <li>상호명: (주)와이 | 대표명 : 김창희 | 사업자등록번호 : 000 - 00 - 00000 | 문의 : abc@abc.com</li>
                        <li>통신판매업신고번호 : 제 2023-가나다라-00000호 | 주소: 부산시 연제구 거제대로214번길 6</li>
                        <li>© 2023 (주)와이 , Inc. All rights reserved.</li>
                    </ul>
                </div>
                <div className="right">
                    <img src="/images/ico_facebook.png" alt="" />
                    <img src="/images/ico_instagram.png" alt="" />
                    <img src="/images/ico_youtube.png" alt="" />
                    <img src="/images/ico_kakao.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer;