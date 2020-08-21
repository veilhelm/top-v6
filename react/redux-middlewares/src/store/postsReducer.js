import axios from 'axios';

const GET_POSTS = 'GET_POSTS';
const SET_ERROR = 'SET_ERROR';
const TOGGLE_LOADING = 'SET_LOADING';

const PostsAPI = axios.create({
  method: 'GET',
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
});

const initialState = {
  posts: [],
  error: null,
  loading: false,
};

// function getPosts(data) {
//   return {
//     type: GET_POSTS,
//     payload: data,
//   }
// }

export function getPosts() {
  return async function(dispatch) {
    dispatch({ type: TOGGLE_LOADING });
    try {
      const { data } = await PostsAPI({
        url: '/posts'
      });

      dispatch({
        type: GET_POSTS,
        payload: data,
      });
    } catch(err) {
      dispatch({
        type: SET_ERROR,
        payload: err,
      });
    } finally {
      dispatch({ type: TOGGLE_LOADING });
    }
  }
}

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }
    default:
      return state;
  }
}
