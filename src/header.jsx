import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className='header'>
                <div className="header_in">
                    <div className="left">
                        <Link to='/'><img src="/images/logo_main.png" alt="" /></Link>
                    </div>
                    <div className="mid">
                        <ul className="nav">
                            <li >
                                <Link to='/component/qnai'>
                                    <h4>Q&AI</h4>
                                </Link>
                            </li>
                            <li >
                                <Link to='/component/community'>
                                    <h4>커뮤니티</h4>
                                </Link>
                            </li>
                            <li>
                                <Link to='/component/news'>
                                    <h4>뉴스</h4>
                                </Link>
                            </li>
                            <li >
                                <Link to='/component/event'>
                                    <h4 >이벤트</h4>
                                </Link>
                            </li>
                            {/* <li>
                                <Link to='/component/notice'>
                                    <h4>고객센터</h4>
                                </Link>
                            </li> */}
                        </ul>


                        <input type="text" placeholder="검색" />
                    </div>
                    <div className="right">
                        <ul className="user_mn">
                            <li><Link to='/component/login'>로그인</Link></li>
                            <li><Link to='/component/login' style={{ 'color': '#fff' }}>회원가입</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;