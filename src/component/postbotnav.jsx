import React from "react";

function PostBotNav() {
    // 현재 페이지를 저장할 state 변수 선언
    const [currentPage, setCurrentPage] = React.useState(1);

    // 이전 페이지로 이동하는 함수
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // 다음 페이지로 이동하는 함수
    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    // 각 페이지를 클릭했을 때 해당 페이지로 이동하는 함수
    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='post_bot_nav'>
            <button onClick={goToPreviousPage}>
                <img src="/images/previous.png" alt="" />
                <span>Previous</span>
            </button>
            <ul>
                {/* 페이지 수만큼 li를 생성하고, 현재 페이지일 경우 active 클래스 추가 */}
                {[1, 2, 3, 4, 5, 6].map((pageNumber) => (
                    <li
                        key={pageNumber}
                        className={pageNumber === currentPage ? "active" : ""}
                        onClick={() => goToPage(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                ))}
            </ul>
            <button onClick={goToNextPage}>
                <span>Next</span>
                <img src="/images/next.png" alt="" />
            </button>
        </div>
    )
}

export default PostBotNav;