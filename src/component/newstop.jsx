import React from "react";


function NewsTopRight({ newsContent }) {
    if (2 <= newsContent.id && newsContent.id <= 5) {
        return (
            <div className="right_in">
                <img src={newsContent.src} alt="" />
                <h5>{newsContent.tit}</h5>
                <p>{newsContent.content}</p>
                <span>{newsContent.date}</span>
            </div>
        );
    }
}


function NewsTop() {
    const newsContents = [
        {
            id: 1,
            src: '/images/news_bg.png',
            tit: '뉴스 제목입니다 1',
            content: '뉴스 내용입니다 newsContents 네이버가 다음 달부터 뉴스 서비스 언론사 홈페이지로 이동해 기사를 읽는방식인 ‘아웃링크’ 제도 도입을 무기한 연기했다.일부 언론사들이 아웃 링크 가이드라인에 과도한 제재가 ... ',
            date: '2023.04.03',
            time: '1시간전',
            press: 'pressName',
            on: false
        },
        {
            id: 2,
            src: '/images/news_bg.png',
            tit: '뉴스 제목입니다 2',
            content: '뉴스 내용입니다 newsContents 네이버가 다음 달부터 뉴스 서비스 언론사 홈페이지로 이동해 기사를 읽는방식인 ‘아웃링크’ 제도 도입을 무기한 연기했다.일부 언론사들이 아웃 링크 가이드라인에 과도한 제재가 ... ',
            date: '2023.04.03',
            time: '1시간전',
            press: 'pressName',
            on: false
        },
        {
            id: 3,
            src: '/images/news_bg.png',
            tit: '뉴스 제목입니다 3',
            content: '뉴스 내용입니다 newsContents 네이버가 다음 달부터 뉴스 서비스 언론사 홈페이지로 이동해 기사를 읽는방식인 ‘아웃링크’ 제도 도입을 무기한 연기했다.일부 언론사들이 아웃 링크 가이드라인에 과도한 제재가 ... ',
            date: '2023.04.03',
            time: '1시간전',
            press: 'pressName',
            on: false
        },
        {
            id: 4,
            src: '/images/news_bg.png',
            tit: '뉴스 제목입니다 4',
            content: '뉴스 내용입니다 newsContents 네이버가 다음 달부터 뉴스 서비스 언론사 홈페이지로 이동해 기사를 읽는방식인 ‘아웃링크’ 제도 도입을 무기한 연기했다.일부 언론사들이 아웃 링크 가이드라인에 과도한 제재가 ... ',
            date: '2023.04.03',
            time: '1시간전',
            press: 'pressName',
            on: false
        },
        {
            id: 5,
            src: '/images/news_bg.png',
            tit: '뉴스 제목입니다 5',
            content: '뉴스 내용입니다 newsContents 네이버가 다음 달부터 뉴스 서비스 언론사 홈페이지로 이동해 기사를 읽는방식인 ‘아웃링크’ 제도 도입을 무기한 연기했다.일부 언론사들이 아웃 링크 가이드라인에 과도한 제재가 ... ',
            date: '2023.04.03',
            time: '1시간전',
            press: 'pressName',
            on: false
        },
        {
            id: 6,
            src: '/images/news_bg.png',
            tit: '뉴스 제목입니다 6',
            content: '뉴스 내용입니다 newsContents 네이버가 다음 달부터 뉴스 서비스 언론사 홈페이지로 이동해 기사를 읽는방식인 ‘아웃링크’ 제도 도입을 무기한 연기했다.일부 언론사들이 아웃 링크 가이드라인에 과도한 제재가 ... ',
            date: '2023.04.03',
            time: '1시간전',
            press: 'pressName',
            on: false
        },
        {
            id: 7,
            src: '/images/news_bg.png',
            tit: '뉴스 제목입니다 7',
            content: '뉴스 내용입니다 newsContents 네이버가 다음 달부터 뉴스 서비스 언론사 홈페이지로 이동해 기사를 읽는방식인 ‘아웃링크’ 제도 도입을 무기한 연기했다.일부 언론사들이 아웃 링크 가이드라인에 과도한 제재가 ... ',
            date: '2023.04.03',
            time: '1시간전',
            press: 'pressName',
            on: false
        },
        {
            id: 8,
            src: '/images/news_bg.png',
            tit: '뉴스 제목입니다 8',
            content: '뉴스 내용입니다 newsContents 네이버가 다음 달부터 뉴스 서비스 언론사 홈페이지로 이동해 기사를 읽는방식인 ‘아웃링크’ 제도 도입을 무기한 연기했다.일부 언론사들이 아웃 링크 가이드라인에 과도한 제재가 ... ',
            date: '2023.04.03',
            time: '1시간전',
            press: 'pressName',
            on: false
        },
        {
            id: 9,
            src: '/images/news_bg.png',
            tit: '뉴스 제목입니다 9',
            content: '뉴스 내용입니다 newsContents 네이버가 다음 달부터 뉴스 서비스 언론사 홈페이지로 이동해 기사를 읽는방식인 ‘아웃링크’ 제도 도입을 무기한 연기했다.일부 언론사들이 아웃 링크 가이드라인에 과도한 제재가 ... ',
            date: '2023.04.03',
            time: '1시간전',
            press: 'pressName',
            on: false
        },
        {
            id: 10,
            src: '/images/news_bg.png',
            tit: '뉴스 제목입니다 10',
            content: '뉴스 내용입니다 newsContents 네이버가 다음 달부터 뉴스 서비스 언론사 홈페이지로 이동해 기사를 읽는방식인 ‘아웃링크’ 제도 도입을 무기한 연기했다.일부 언론사들이 아웃 링크 가이드라인에 과도한 제재가 ... ',
            date: '2023.04.03',
            time: '1시간전',
            press: 'pressName',
            on: false
        }
    ]

    return (
        <div className="news_Top">
            <div className="left">
                <img src={newsContents[0].src} alt="" />
                <h5>{newsContents[0].tit}</h5>
                <p>{newsContents[0].content}</p>
                <span>{newsContents[0].date}</span>
            </div>
            <div className="right">
                {newsContents.map((newsContent) => (
                    <NewsTopRight newsContent={newsContent} key={newsContent.id} />
                ))}
            </div>
        </div>
    );
}

export default NewsTop;