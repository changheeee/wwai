import React, { useState } from 'react';
import PostBotNav from "./postbotnav";
import PostTopNav from "./posttopnav";
import { usePostState } from "../context";


function PostList01({ post }) {
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
    if (post.id >= 0) {
        return (
            // post 클래스의 div 객체
            <div className='post'>
                <div className="post_in">
                    <ul>
                        <li className="post_top">
                            {/* 사용자 이름과 날짜 출력 */}
                            <span><img src="/images/user_profile.png" />{post.user}</span>
                            <span>{post.date}</span>
                        </li>
                        <li className="post_mid">
                            {/* 제목 출력 */}
                            <h5>{post.tit}</h5>
                        </li>
                        <li className="post_bot">
                            {/* 좋아요 수와 댓글 수 출력 */}
                            <span>
                                {/* post.on이 참이면 왼쪽이미지 거짓이면 오른쪽이미지 */}
                                <img src={on ? '/images/ico_like_on.png' : '/images/ico_like.png'} onClick={handleClick} />
                                {like}
                            </span>
                            <span><img src='/images/ico_comment.png' />{post.comment}</span>
                        </li>
                    </ul>
                </div>

            </div>

        )
    };
}

// Post 컴포넌트 선언
function Post() {
    const posts = usePostState();
    return (
        <>
            <PostTopNav />
            {posts.map((post) => (
                <div key={post.id}>
                    <PostList01 post={post} />
                </div>
            ))}
            <PostBotNav />
        </>
    );
};

export default Post;