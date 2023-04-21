import React from "react";
import { Link } from 'react-router-dom'
import Footer from "../footer";
import Ad from "./ad";

function Login() {
    return (
        <div>
            <div>
                <div className="sub_wrap">
                    <div className="sub_in">
                        <Ad />
                        <div className="sub_content">
                            <div className="login_wrap">
                                <div className="longin_in">
                                    <div className="top">
                                        <Link to='/'><img src="/images/logo_main.png" alt="" /></Link>
                                        <h2>WWAI에 오신것을 환영합니다.</h2>
                                        <span>WWAI는 모두를 위한 AI 지식공유 플랫폼입니다.</span>
                                    </div>
                                    <div className="mid">
                                        <p>SNS 로그인</p>
                                        <ul>
                                            <li><img src="/images/ico_naver.png" alt="" /><span>네이버 로그인</span></li>
                                            <li><img src="/images/ico_google.png" alt="" /><span>구글 로그인</span></li>
                                            <li><img src="/images/ico_kakao.png" alt="" /><span>카카오 로그인</span></li>
                                            <li><img src="/images/ico_facebook.png" alt="" /><span>페이스북 로그인</span></li>
                                        </ul>
                                    </div>
                                    <div className="bot">
                                        <div className="login_wwai">
                                            <b></b>
                                            <span>WWAI 아이디로 로그인</span>
                                            <b></b>
                                        </div>
                                        <p>아이디</p>
                                        <input type="text" />
                                        <p>비밀번호</p>
                                        <input type="password" />
                                    </div>
                                    <div className="submit">
                                        <div><a href="/">계정찾기</a></div>
                                        <input type="submit" value="로그인" />
                                    </div>
                                    <div className="join">
                                        <span>아직 회원이 아니신가요?</span>
                                        <a href="#">회원가입</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Ad />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;