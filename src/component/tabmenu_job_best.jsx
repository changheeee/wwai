
import React, { useState } from 'react';
import { usePostState } from '../context';
import WeeklyBest from './weeklybest';

function JobTabMenuBest() {
    const post = usePostState();
    const [on, setOn] = useState(false);
    const [like, setUp] = useState(post.like);
    const handleClick = () => {
        setOn(!on);
        if (on == true) {
            setUp(like - 1);
        } else {
            setUp(like + 1);
        }
    };

    // useState를 사용하여 현재 선택된 탭의 인덱스를 저장
    const [activeTab, setActiveTab] = useState(0);

    // 탭을 클릭할 때 실행되는 함수
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div>

            </div>
            {/* 탭 메뉴 */}
            <ul className="community_nav_job">
                <li onClick={() => handleTabClick(0)} className={activeTab === 0 && 'active'}>
                    <h4 >경영/사무</h4>
                </li>
                <li onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
                    <h4 >마케팅 · 광고</h4>
                </li>
                <li onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
                    <h4>IT개발 · 인터넷</h4>
                </li>
                <li onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''}>
                    <h4>디자인</h4>
                </li>
                <li onClick={() => handleTabClick(4)} className={activeTab === 4 ? 'active' : ''}>
                    <h4>무역 · 유통</h4>
                </li>
                <li onClick={() => handleTabClick(5)} className={activeTab === 5 ? 'active' : ''}>
                    <h4 >영업 · 고객상담</h4>
                </li>
                <li onClick={() => handleTabClick(6)} className={activeTab === 6 ? 'active' : ''}>
                    <h4>서비스</h4>
                </li>
                <li onClick={() => handleTabClick(7)} className={activeTab === 7 ? 'active' : ''}>
                    <h4>연구개발 · 설계</h4>
                </li>
                <li onClick={() => handleTabClick(8)} className={activeTab === 8 ? 'active' : ''}>
                    <h4>교육</h4>
                </li>
                <li onClick={() => handleTabClick(9)} className={activeTab === 9 ? 'active' : ''}>
                    <h4>건설 · 건축</h4>
                </li>
                <li onClick={() => handleTabClick(10)} className={activeTab === 10 ? 'active' : ''}>
                    <h4>의료</h4>
                </li>
                <li onClick={() => handleTabClick(11)} className={activeTab === 11 ? 'active' : ''}>
                    <h4>미디어 · 문화</h4>
                </li>
                <li onClick={() => handleTabClick(12)} className={activeTab === 12 ? 'active' : ''}>
                    <h4>전문·특수·연구직</h4>
                </li>
                <li onClick={() => handleTabClick(13)} className={activeTab === 13 ? 'active' : ''}>
                    <h4>관광레저서비스</h4>
                </li>
                <li>
                    <h4></h4>
                </li>
            </ul>


            {/* 선택된 탭에 따라 보여지는 컨텐츠 */}
            {activeTab === 0 && (
                <WeeklyBest />
            )}
            {activeTab === 1 && (
                <WeeklyBest />
            )
            }
            {activeTab === 2 && (
                <WeeklyBest />
            )
            }
            {activeTab === 3 && (
                <WeeklyBest />
            )
            }
            {activeTab === 4 && (
                <WeeklyBest />
            )}
            {activeTab === 5 && (
                <WeeklyBest />
            )
            }
            {activeTab === 6 && (
                <WeeklyBest />
            )
            }
            {activeTab === 7 && (
                <WeeklyBest />
            )
            }
            {activeTab === 8 && (
                <WeeklyBest />
            )}
            {activeTab === 9 && (
                <WeeklyBest />
            )
            }
            {activeTab === 10 && (
                <WeeklyBest />
            )
            }
            {activeTab === 11 && (
                <WeeklyBest />
            )
            }
            {activeTab === 12 && (
                <WeeklyBest />
            )}
            {activeTab === 13 && (
                <WeeklyBest />
            )
            }

        </div >
    );
}

export default JobTabMenuBest;




