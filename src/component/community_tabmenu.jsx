
import React, { useState } from 'react';
import Post from './post';
import JobTabMenu from './tabmenu_job';
import BestPost from './bestpost';

function CommunityTabMenu() {
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
                <ul className="community_nav">
                    {/* 첫 번째 탭 */}
                    <li onClick={() => handleTabClick(0)}>
                        <h4 className={activeTab === 0 ? 'active' : ''}>인기글</h4>
                    </li>
                    {/* 두 번째 탭 */}
                    <li onClick={() => handleTabClick(1)}>
                        <h4 className={activeTab === 1 ? 'active' : ''}>직종별 이야기</h4>
                    </li>
                    {/* 첫 번째 탭 */}
                    <li onClick={() => handleTabClick(2)}>
                        <h4 className={activeTab === 2 ? 'active' : ''}>Q&A</h4>
                    </li>
                    {/* 두 번째 탭 */}
                    <li onClick={() => handleTabClick(3)}>
                        <h4 className={activeTab === 3 ? 'active' : ''}>정보</h4>
                    </li>
                </ul>
            </div>


            {/* 선택된 탭에 따라 보여지는 컨텐츠 */}
            {activeTab === 0 && (
                <div>
                    {/* 인기글 탭의 컨텐츠 */}
                    <BestPost />
                </div>
            )}
            {activeTab === 1 && (
                <div>
                    {/* 직종별 이야기 탭의 컨텐츠 */}
                    <JobTabMenu />
                </div>
            )
            }
            {activeTab === 2 && (
                <div>
                    {/* Q&A 탭의 컨텐츠 */}
                    <Post />
                </div>
            )
            }
            {activeTab === 3 && (
                <div>
                    {/* 정보 탭의 컨텐츠 */}
                    <Post />
                </div>
            )
            }
        </div >
    );
}

export default CommunityTabMenu;




