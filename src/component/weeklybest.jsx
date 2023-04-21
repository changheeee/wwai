
import React, { useState } from 'react';
import { usePostState } from '../context';

function WeeklyBestList({ post }) {

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
            <div>
                <ul>
                    <div className='post'>
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
                </ul>
            </div>
        );
    }
}

function WeeklyBest() {
    const posts = usePostState();
    return (
        <div>
            <div className='job_best_wrap'>
                <div className='weekly_best'>
                    <div className='tit_wrap'>
                        <h4>Weekly Best</h4>
                    </div>
                    {
                        posts.map((post) => (
                            <div key={post.id}>
                                <WeeklyBestList post={post} />
                            </div>
                        ))
                    }
                </div>
                <div className='weekly_best'>
                    <div className='tit_wrap'>
                        <h4>Monthly Best</h4>
                    </div>
                    {
                        posts.map((post) => (
                            <div key={post.id}>
                                <WeeklyBestList post={post} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );


}

export default WeeklyBest;




