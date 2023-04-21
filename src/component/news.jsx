import React from "react";
import Footer from "../footer";
import Ad from "./ad";
import PostBotNav from "./postbotnav";
import NewsTop from "./newstop";
import NewsPost from "./newspost";


function News() {
    return (
        <div>
            <div className="sub_wrap">
                <div className="sub_in">
                    <Ad />
                    <div className="sub_content">
                        <div className="content_top">
                            <h2>NEWS</h2>
                            <p>AI관련 소식을 만나보세요</p>
                            <img src="/images/content_illust.png" alt="" />
                        </div>
                        <NewsTop />
                        <NewsPost />
                        <PostBotNav />
                    </div>
                    <Ad />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default News;