import React, { useState } from "react";




export function BestPostList({ resultList }) {

    if (resultList.id > 0) {
        return (
            <div className='event_result_in'>
                <p>{resultList.id}</p>
                <h5 className="post_best_tit">{resultList.title}</h5>
                <span>{resultList.date}</span>
                <b>{resultList.seen}</b>
            </div>
        )
    }
}



function EventResult() {
    const resultLists = [
        {
            id: 1,
            notice: true,
            title: '9/9 네이버 쇼핑라이브 기프티콘 당첨자 발표',
            date: '2021.09.09',
            seen: '76',
            hot: true
        },
        {
            id: 2,
            notice: false,
            title: '[12월 메인이벤트] 100원 래플 당첨자',
            date: '2021.12.29',
            seen: '282',
            hot: false
        },
        {
            id: 3,
            notice: true,
            title: '[추석맞이 이벤트] 매일이 혜택 - 20일 만기 당첨자',
            date: '2022.09.15',
            seen: '12',
            hot: true
        },
        {
            id: 4,
            notice: false,
            title: '[노출] 설맞이 회원가입 주유비 이벤트 발표',
            date: '2023.01.30',
            seen: '2',
            hot: false
        }
        ,
        {
            id: 5,
            notice: true,
            title: '[12월 메인이벤트] 100원 래플 당첨자',
            date: '2021.12.29',
            seen: '282',
            hot: true
        }
        ,
        {
            id: 6,
            notice: false,
            title: '[추석맞이 이벤트] 매일이 혜택 - 20일 만기 당첨자',
            date: '2022.09.15',
            seen: '12',
            hot: false
        }
        ,
        {
            id: 7,
            notice: false,
            title: '[노출] 설맞이 회원가입 주유비 이벤트 발표',
            date: '2023.01.30',
            seen: '2',
            hot: false
        }
    ]

    return (
        <div className="event_result_wrap">
            <div className="event_result_title">
                <span className="num">번호</span>
                <span className="tit">제목</span>
                <span className="date">날짜</span>
                <span className="seen">조회수</span>
            </div>
            {resultLists.map((resultList) => (
                <BestPostList resultList={resultList} key={resultList.id} />
            ))}
        </div>
    )
}

export default EventResult;