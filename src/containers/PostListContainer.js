import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

function PostListContainer() {
    const { data, loading, error } = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) return;
        dispatch(getPosts());
    }, [data, dispatch]);

    if (loading) return <div>loading...</div>;
    if (error) return <div>error...</div>;
    if (!data) return null;
    return <PostList posts={data} />;
}

export default PostListContainer;