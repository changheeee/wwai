import React from "react";
import Footer from "../footer";
import Ad from "./ad";
import EventTabMenu from "./event_tabmenu";
function Event() {
    return (
        <div>
            <div className="sub_wrap">
                <div className="sub_in">
                    <Ad />
                    <div className="sub_content">
                        <div className="content_top">
                            <h2>이벤트</h2>
                            <p>이벤트입니다.</p>
                            <img src="/images/content_illust.png" alt="" />
                        </div>
                        <EventTabMenu />
                    </div>
                    <Ad />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Event;