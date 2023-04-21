import React from "react";
import Footer from "../footer";
import Ad from "./ad";
function Notice() {
    return (
        <div>
            <div className="sub_wrap">
                <div className="sub_in">
                    <Ad />
                    <div className="sub_content">
                        <div className="content_top">
                            <h2>고객센터</h2>
                            <p>고객센터입니다.</p>
                            <img src="/images/content_illust.png" alt="" />
                        </div>
                    </div>
                    <Ad />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Notice;