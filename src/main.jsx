import React from "react";
import Footer from './footer';
import Ad from "./component/ad";
import BestPost from "./component/bestpost";
import EventCarousel from "./component/event_carausel";
import NewsTop from "./component/newstop";
import Slide from "./component/slide";


function Main() {
    return (
        <div className="main">
            <div className="sub_wrap">
                <div className="sub_in">
                    <Ad />
                    <div className="sub_content">
                        <EventCarousel />
                        <BestPost />
                        <div className="post_best">
                            <h3>News</h3>
                            <p>최신 소식입니다</p>
                            <NewsTop />
                        </div>

                    </div>
                    <Ad />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Main;