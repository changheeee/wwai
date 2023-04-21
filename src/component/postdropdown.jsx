import React, { useState } from 'react';

function PostDropdown() {
    const [sortType, setSortType] = useState('최신순'); // 현재 선택된 정렬 방식을 저장하는 state
    const posts = [/* 게시글 데이터 */]; // 게시글 데이터 배열

    // 정렬 방식에 따라 게시글을 정렬하는 함수
    const sortPosts = (type) => {
        if (type === '최신순') {
            return posts.sort((a, b) => b.date - a.date);
        } else if (type === '인기순') {
            return posts.sort((a, b) => b.likes - a.likes);
        } else if (type === '댓글수') {
            return posts.sort((a, b) => b.comments.length - a.comments.length);
        }
    };

    // 드롭다운 버튼 클릭 시 정렬 방식을 변경하는 함수
    const handleSortChange = (e) => {
        setSortType(e.target.value);
    };

    return (
        <div>
            <select value={sortType} onChange={handleSortChange}>
                <option value="최신순">최신순</option>
                <option value="인기순">인기순</option>
                <option value="댓글수">댓글수</option>
            </select>

            {/* 출력 */}
            {/* <ul>
                {sortPosts(sortType).map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p>{post.date}</p>
                        <p>{post.likes}</p>
                        <p>{post.comments.length}</p>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

export default PostDropdown;