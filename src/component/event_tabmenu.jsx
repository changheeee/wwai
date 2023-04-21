
import React, { useState } from 'react';
import EventPost from './eventpost';
import EndEventPost from './endeventpost';
import EventResult from './event_result';

function EventTabMenu() {
    // useState를 사용하여 현재 선택된 탭의 인덱스를 저장
    const [activeTab, setActiveTab] = useState(0);

    // 탭을 클릭할 때 실행되는 함수
    const handleTabClick = (index) => {
        setActiveTab(index);
    };



    return (
        <div >
            {/* 탭 메뉴 */}
            <div className='nav_wrap'>
                <ul className="event_nav">
                    {/* 첫 번째 탭 */}
                    <li onClick={() => handleTabClick(0)} className={activeTab === 0 ? 'active' : ''}>
                        <h4>진행중인 이벤트</h4>
                    </li>
                    {/* 두 번째 탭 */}
                    <li onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
                        <h4>종료된 이벤트</h4>
                    </li>
                    {/* 첫 번째 탭 */}
                    <li onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
                        <h4>당첨자 발표</h4>
                    </li>
                </ul>
            </div>


            {/* 선택된 탭에 따라 보여지는 컨텐츠 */}
            {activeTab === 0 && (
                <div>
                    {/* 진행중 이벤트 */}
                    <EventPost />
                </div>
            )}
            {activeTab === 1 && (
                <div>
                    {/* 종료된 이벤트 */}
                    <EndEventPost />
                </div>
            )
            }
            {activeTab === 2 && (
                <div>
                    {/* 당첨자 발표 */}
                    <EventResult />
                </div>
            )
            }
            {activeTab === 3 && (
                <div>
                    {/* 정보 탭의 컨텐츠 */}
                </div>
            )
            }
        </div >
    );
}

export default EventTabMenu;




