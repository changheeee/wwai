import React from "react";
import PostDropdown from "./postdropdown";

function PostTopNav() {
    return (
        <div className='post_nav'>
            <button>작성하기</button>
            <input type="text" placeholder='검색' />
            <PostDropdown />
        </div>
    )
}

export default PostTopNav;