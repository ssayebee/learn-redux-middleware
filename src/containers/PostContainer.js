import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, goToHome } from '../modules/posts';
import Post from '../components/Post';

function PostContainer({ postId }) {
    const { data, loading, error } = useSelector(state => state.posts.post[postId]) ||
    {loading: false, data: null, error: null};
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(postId));
    }, [dispatch, postId]);

    if (loading && !data) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;

    return (
    <>
        <button onClick={() => dispatch(goToHome())}>go to home</button>
        <Post post={data} />;
    </>
    );
}

export default PostContainer;