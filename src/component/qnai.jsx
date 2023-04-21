import React from "react";
import Footer from "../footer";
import Ad from "./ad";
import TabMenu from "./tabmenu";



function QnAi() {
    return (
        <div>
            <div className="sub_wrap">
                <div className="sub_in">
                    <Ad />
                    <div className="sub_content">
                        <div className="content_top">
                            <h2>Q&AI</h2>
                            <p>궁금한 점을 나의 AI에게 질문하고, 답변을 공유해주세요</p>
                            <img src="/images/content_illust.png" alt="" />
                        </div>
                        <div>
                            <TabMenu />
                            {/* <ul className="qnai_nav">
                                <li><h4>질문하기</h4></li>
                                <li><h4>공유하기</h4></li>
                            </ul> */}
                        </div>
                    </div>
                    <Ad />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default QnAi;
