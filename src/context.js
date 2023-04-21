import React, { createContext, useContext, useReducer, useState } from "react"
// posts 배열을 export하여 다른 파일에서도 사용할 수 있도록 함

const posts = [
    {
        id: 1,
        user: '유저명',
        date: '2023.04.03',
        tit: '제목입니다',
        like: 0,
        on: false,
        comment: '58'
    },
    {
        id: 2,
        user: '유저명',
        date: '2023.04.03',
        tit: '제목입니다',
        like: 0,
        on: false,
        comment: '58'
    },
    {
        id: 3,
        user: '유저명',
        date: '2023.04.03',
        tit: '제목입니다',
        like: 0,
        on: false,
        comment: '58'
    },
    {
        id: 4,
        user: '유저명',
        date: '2023.04.03',
        tit: '제목입니다',
        like: 0,
        on: false,
        comment: '58'
    },
    {
        id: 5,
        user: '유저명',
        date: '2023.04.03',
        tit: '제목입니다',
        like: 0,
        on: false,
        comment: '58'
    },
    {
        id: 6,
        user: '유저명',
        date: '2023.04.03',
        tit: '제목입니다',
        like: 0,
        on: false,
        comment: '58'
    },
    {
        id: 7,
        user: '유저명',
        date: '2023.04.03',
        tit: '제목입니다',
        like: 0,
        on: false,
        comment: '58'
    },
    {
        id: 8,
        user: '유저명',
        date: '2023.04.03',
        tit: '제목입니다',
        like: 0,
        on: false,
        comment: '58'
    },
    {
        id: 9,
        user: '유저명',
        date: '2023.04.03',
        tit: '제목입니다',
        like: 0,
        on: false,
        comment: '58'
    },
    {
        id: 10,
        user: '유저명',
        date: '2023.04.03',
        tit: '제목입니다',
        like: 0,
        on: false,
        comment: '58'
    }
];


//액션을 관리하는 함수
function postReducer(state, action) {

}

//범위를 설정하는 함수선언
const PostStateContext = createContext();

export function PostProvider({ children }) {
    //const [state, setState] = useState('초기값');

    const [state, dispatch] = useReducer(postReducer, posts);
    //       [배열,액션]    = useReducer(액션을관리하는함수, 배열을 갖고 있는 함수);

    return (
        <div>
            <PostStateContext.Provider value={state}>
                {children}
            </PostStateContext.Provider>
        </div>
    )

}

//전역데이터를 사용하도록 연결하는 함수
export function usePostState() {
    const context = useContext(PostStateContext);
    if (!context) {
        throw new Error('PostProvider를 찾을 수 없음');
    }
    return context;
}