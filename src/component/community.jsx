import React from "react";
import Footer from "../footer";
import Ad from "./ad";
import CommunityTabMenu from "./community_tabmenu";



function Community() {
    return (
        <>
            <div className="sub_wrap">
                <div className="sub_in">
                    <Ad />
                    <div className="sub_content">
                        <div className="content_top">
                            <h2>커뮤니티</h2>
                            <p>AI와 함께하는 다양한 사람들의 이야기를 들어보세요</p>
                            <img src="/images/content_illust.png" alt="" />
                        </div>
                        <CommunityTabMenu />
                    </div>
                    <Ad />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Community;


