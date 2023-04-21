import React from "react";
import PostBotNav from "./postbotnav";


function EventList({ eventContent }) {
    if (9 >= eventContent.id) {
        return (
            <>
                <div className="event_in">
                    <img src={eventContent.src} alt="" />
                    <h5>{eventContent.tit}</h5>
                    <span>{eventContent.date}</span>
                </div>

            </>
        );
    }
}

function EndEvent({ eventContent }) {
    if (eventContent.end == true) {
        return (
            <>
                <div className="event_in">
                    <img src={eventContent.src} alt="" />
                    <h5>{eventContent.tit}</h5>
                    <span>{eventContent.date}</span>
                </div>

            </>
        )
    }
}

function EventPost() {
    const eventContents = [
        {
            id: 1,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 1',
            date: '2023.04.03 ~ 2023.05.31',
            end: false
        }, {
            id: 2,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 2',
            date: '2023.04.03 ~ 2023.05.31',
            end: false
        }, {
            id: 3,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 3',
            date: '2023.04.03 ~ 2023.05.31',
            end: false
        }, {
            id: 4,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 4',
            date: '2023.04.03 ~ 2023.05.31',
            end: false
        }, {
            id: 5,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 5',
            date: '2023.04.03 ~ 2023.05.31',
            end: false
        }, {
            id: 6,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 6',
            date: '2023.04.03 ~ 2023.05.31',
            end: false
        }, {
            id: 7,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 7',
            date: '2023.04.03 ~ 2023.05.31',
            end: false
        }, {
            id: 8,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 8',
            date: '2023.04.03 ~ 2023.05.31',
            end: false
        }, {
            id: 9,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 9',
            date: '2023.04.03 ~ 2023.05.31',
            end: false
        }, {
            id: 10,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 10',
            date: '2023.04.03 ~ 2023.05.31',
            end: true
        }, {
            id: 11,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 11',
            date: '2023.04.03 ~ 2023.05.31',
            end: true
        }, {
            id: 12,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 12',
            date: '2023.04.03 ~ 2023.05.31',
            end: true
        }, {
            id: 13,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 13',
            date: '2023.04.03 ~ 2023.05.31',
            end: true
        }, {
            id: 14,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 14',
            date: '2023.04.03 ~ 2023.05.31',
            end: true
        }, {
            id: 15,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 15',
            date: '2023.04.03 ~ 2023.05.31',
            end: true
        }, {
            id: 16,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 16',
            date: '2023.04.03 ~ 2023.05.31',
            end: true
        }, {
            id: 17,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 17',
            date: '2023.04.03 ~ 2023.05.31',
            end: true
        }, {
            id: 18,
            src: '/images/event_bg.png',
            tit: '이벤트 제목입니다 18',
            date: '2023.04.03 ~ 2023.05.31',
            end: true
        }

    ]

    return (
        <>
            <div className="event_wrap">
                {eventContents.map((eventContents) => (
                    <EventList eventContent={eventContents} key={eventContents.id} />
                ))}
            </div>
            <PostBotNav />
        </>
    );
}

export default EventPost;