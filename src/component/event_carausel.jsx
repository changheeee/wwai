import React, { useState, useEffect, useRef } from 'react';

// EventCarousel 컴포넌트 생성
const EventCarousel = () => {

    // 현재 보여지는 섹션의 인덱스를 state로 관리
    const [currentSection, setCurrentSection] = useState(0);

    // 5초마다 currentSection을 1씩 증가시키는 함수
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSection((prev) => (prev + 1) % 4);
        }, 5000);
        return () => clearInterval(interval);
    }, []);




    // 각 섹션의 내용을 배열로 저장
    const sections = [
        {
            src: '/images/event_bg_01.png',
            title: '이벤트/광고 제목입니다 1',
            content: '이벤트/광고에 대한 설명입니다',
        },
        {
            src: '/images/event_bg_02.png',
            title: '이벤트/광고 제목입니다 2',
            content: '이벤트/광고에 대한 설명입니다',
        },
        {
            src: '/images/event_bg_03.png',
            title: '이벤트/광고 제목입니다 3',
            content: '이벤트/광고에 대한 설명입니다',
        },
        {
            src: '/images/event_bg_04.png',
            title: '이벤트/광고 제목입니다 4',
            content: '이벤트/광고에 대한 설명입니다',
        },
    ];

    // 이전 섹션으로 이동하는 함수
    const goToPrevSection = () => {
        setCurrentSection(currentSection === 0 ? sections.length - 1 : currentSection - 1);
    };

    // 다음 섹션으로 이동하는 함수
    const goToNextSection = () => {
        setCurrentSection(currentSection === sections.length - 1 ? 0 : currentSection + 1);
    };


    return (
        <>
            <div className="event_carousel">
                <div className='event_tit'>
                    {/* 현재 보여지는 섹션의 제목 */}
                    <h2>{sections[currentSection].title}</h2>
                    {/* 현재 보여지는 섹션의 내용 */}
                    <p>{sections[currentSection].content}</p>
                </div>
                {/* 이벤트 이미지 */}
                <img src={sections[currentSection].src} alt="" />

                <div className='btn'>
                    {/* 이전 섹션으로 이동하는 버튼 */}
                    <button onClick={goToPrevSection}>
                        <img src="/images/carausel_prev.png" alt="" />
                    </button>
                    {/* 다음 섹션으로 이동하는 버튼 */}
                    <button onClick={goToNextSection}>
                        <img src="/images/carausel_next.png" alt="" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default EventCarousel;