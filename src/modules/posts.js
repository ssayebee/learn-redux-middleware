import * as postAPI from '../api/posts';
import { createPromiseThunk, reducerUtils, handleAsuncActions, createPromiseThunkById, handleAsuncActionsById } from '../lib/asyncUtils';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

const CLEAR_POST = 'CLEAR_POST';

export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postAPI.getPostById);

export const clearPost = () => ({ type: CLEAR_POST });

const initialState = {
    posts: reducerUtils.initial(),
    post: {}
};

export default function posts(state=initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            const postsReducer = handleAsuncActions(GET_POSTS, 'posts', true);
            return postsReducer(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            const postReducer = handleAsuncActionsById(GET_POST, 'post', true);
            return postReducer(state, action);
        default:
            return state;
    }
}

export const goToHome = () => (dispatch, getState, { history}) => {
    history.push('/');
};