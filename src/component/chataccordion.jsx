import React, { useState } from 'react';

function ChatAccordion() {
    // useState를 사용하여 'isOpen'이라는 state를 만들고 초기값을 false로 설정
    const [isOpen, setIsOpen] = useState(false);

    // 'isOpen' state를 변경하는 함수
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className='chat_tip_txt'>
                {/* p 태그를 클릭하면 'toggleAccordion' 함수를 실행 */}
                <p onClick={toggleAccordion}>Chat AI 이용팁</p>
                <img src="/images/chat_tip.png" alt="" />
            </div>
            {/* 'isOpen' state가 true일 때 'chat_tip' 클래스를 가진 div 객체를 보여줌 */}
            {
                isOpen && (
                    <div className='chat_tip'>
                        <ul className='chat_tip_in'>
                            <li>
                                <b>질문을 명확하고 간결하게 작성하세요</b>
                                <span>
                                    - 마케팅팀에서 SNS 캠페인을 하려는데, 가장 인기있는 SNS 플랫폼은 무엇인가요? (마케팅 전문가)<br />
                                    - 오늘 미팅을 위한 자료를 준비하려고 하는데, 회사에서 권장하는 프레젠테이션 도구는 무엇인가요? (비즈니스 분석가)<br />
                                    - 개발 중인 웹사이트에서 구글 애널리틱스를 사용하려고 하는데, 구글 애널리틱스의 설치 방법을 알고 싶습니다. (웹 개발자)
                                </span>
                            </li>
                            <li>
                                <b>가능하면 구체적인 예시나 상황을 제시하세요.</b>
                                <span>
                                    - 프로모션 활동을 하기 위해 블로그를 운영하려고 하는데, 블로그에서 주로 사용하는 포맷은 무엇인가요? (마케팅 전문가)<br />
                                    - 엑셀을 이용해서 데이터를 분석하려고 하는데, 피벗 테이블 기능을 자세히 알고 싶습니다. (데이터 분석가)<br />
                                    - 프로그램을 개발하면서 오류가 발생하는데, 디버깅하는 방법을 알고 싶습니다. (소프트웨어 엔지니어)
                                </span>
                            </li>
                            <li>
                                <b>Chat GPT가 이해하기 쉬운 단어와 구문을 사용하세요.
                                </b>
                                <span>
                                    - 프로모션 활동을 하기 위해 블로그를 운영하려고 하는데, 블로그에서 주로 사용하는 포맷은 무엇인가요? (마케팅 전문가)<br />
                                    - 엑셀을 이용해서 데이터를 분석하려고 하는데, 피벗 테이블 기능을 자세히 알고 싶습니다. (데이터 분석가)<br />
                                    - 프로그램을 개발하면서 오류가 발생하는데, 디버깅하는 방법을 알고 싶습니다. (소프트웨어 엔지니어)
                                </span>
                            </li>
                            <li>
                                <b>Chat GPT가 이해하지 못할 수 있는 전문 용어나 약어를 사용하지 마세요.
                                </b>
                                <span>
                                    - UX/UI 디자인을 할 때 고려해야 할 사항이 무엇인가요? (UX/UI 디자이너)<br />
                                    - 서버에서 발생하는 로그를 분석해야 하는데, 로그 분석을 위한 툴을 추천해주세요. (시스템 엔지니어)<br />
                                    - 프로젝트 매니징을 할 때 Gantt 차트를 사용하는 이유가 무엇인가요? (프로젝트 매니저)
                                </span>
                            </li>
                            <li>
                                <b>Chat GPT가 정확한 답변을 제공할 수 있도록 질문의 범위와 목적을 명확히 해주세요.
                                </b>
                                <span>
                                    - 회사에서 사용하는 코딩 스타일 가이드라인을 알고 싶은데, 어떻게 확인할 수 있나요? (소프트웨어 개발자)<br />
                                    - 제품을 제작할때 사용하는 소재에 대해 알고 싶은데, 안전성과 환경 친화성에 대해서도 함께 알려주세요. (제조 엔지니어)<br />
                                    - 회사에서 사용하고 있는 서버의 성능을 높이기 위한 방법을 알고 싶습니다. (시스템 엔지니어)<br />
                                    - 스타트업을 창업하려고 하는데, 법적인 문제들을 미리 예방할 수 있는 방법을 알려주세요. (창업자)
                                </span>
                            </li>

                        </ul>
                    </div>
                )
            }
        </div >
    );
}

export default ChatAccordion;