import React, { useState } from 'react';
import { usePostState } from "../context";
import JobTabMenuBest from "./tabmenu_job_best";

export function BestPostList({ post }) {
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

    if (post.id <= 5) {
        return (
            <div className='post'>
                <div className="post_best_num">
                    <h3 >{post.id}</h3>
                </div>
                <div className="post_in">
                    <h5 className="post_best_tit">{post.tit}</h5>
                    <ul>
                        <li className="post_top">
                            <span>{post.date}</span>
                            <span><img src="/images/user_profile.png" />{post.user}</span>
                        </li>
                        <li className="post_bot">
                            <span>
                                <img src={on ? '/images/ico_like_on.png' : '/images/ico_like.png'} onClick={handleClick} />
                                {like}
                            </span>
                            <span><img src='/images/ico_comment.png' />{post.comment}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

function BestPost() {
    const posts = usePostState();
    return (
        <>
            <div className="post_best">
                <h3>Today Best</h3>
                <p>오늘의 인기 게시글입니다</p>
                {posts.map((post) => (
                    <div key={post.id}>
                        <BestPostList post={post} />
                    </div>
                ))}
            </div>

            <div className="post_best">
                <h3>직종별 인기글</h3>
                <p>다양한 직종의 사람들을 만나보세요</p>
                <JobTabMenuBest />
            </div>


        </>
    )
}

export default BestPost;