
import React, { useState } from 'react';
import Chat from './chat';
import Post from './post';
import PostDropdown from './postdropdown';
import PostBotNav from './postbotnav';

function TabMenu() {
    // useState를 사용하여 현재 선택된 탭의 인덱스를 저장
    const [activeTab, setActiveTab] = useState(0);

    // 탭을 클릭할 때 실행되는 함수
    const handleTabClick = (index) => {
        setActiveTab(index);
    };



    return (
        <div>
            {/* 탭 메뉴 */}
            <ul className="qnai_nav">
                {/* 첫 번째 탭 */}
                <li onClick={() => handleTabClick(0)}>
                    <h4 className={activeTab === 0 ? 'active' : ''}>질문하기</h4>
                </li>
                {/* 두 번째 탭 */}
                <li onClick={() => handleTabClick(1)}>
                    <h4 className={activeTab === 1 ? 'active' : ''}>공유하기</h4>
                </li>
            </ul>

            {/* 선택된 탭에 따라 보여지는 컨텐츠 */}
            {activeTab === 0 && (
                <div>
                    {/* 질문하기 탭의 컨텐츠 */}
                    <Chat />
                </div>
            )}
            {activeTab === 1 && (
                <div>
                    {/* 공유하기 탭의 컨텐츠 */}
                    <Post />
                </div>
            )}
        </div>
    );
}

export default TabMenu;




