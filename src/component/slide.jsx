import React, { useEffect, useRef } from 'react';

function Slide() {
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

    const containerRef = useRef(null);
    const prevBtnRef = useRef(null);
    const nextBtnRef = useRef(null);

    useEffect(() => {
        prevBtnRef.current.addEventListener('click', () => translateContainer(1));
        nextBtnRef.current.addEventListener('click', () => translateContainer(-1));

        return () => {
            prevBtnRef.current.removeEventListener('click', () => translateContainer(1));
            nextBtnRef.current.removeEventListener('click', () => translateContainer(-1));
        };
    }, []);

    function translateContainer(direction) {
        const selectedBtn = direction === 1 ? 'prev' : 'next';
        containerRef.current.style = `transition-duration: 1500ms; transform: translateX(${direction * 100}%)`;
        containerRef.current.ontransitionend = () => reorganizeEl(selectedBtn);
    }

    function reorganizeEl(selectedBtn) {
        containerRef.current.removeAttribute('style');
        selectedBtn === 'prev'
            ? containerRef.current.insertBefore(containerRef.current.lastElementChild, containerRef.current.firstElementChild)
            : containerRef.current.appendChild(containerRef.current.firstElementChild);
    }

    return (
        <div className="event_carousel">
            <div className="event_tit" ref={containerRef}>
                {sections.map((section, index) => (
                    <div key={index}>
                        <b>{section.title}</b>
                        <p>{section.content}</p>
                    </div>
                ))}
            </div>
            <div className="btn">
                <button ref={prevBtnRef}>이전</button>
                <button ref={nextBtnRef}>다음</button>
            </div>
        </div>
    );
}

export default Slide;
