import axios from "axios";

const initialState = {
  posts: [],
  loading: false
};

const GET_POSTS = "GET_POSTS";
const UPDATE_POSTS = "UPDATE_POSTS";
const DELETE_POSTS = "DELETE_POSTS";
const CREATE_POSTS = "CREATE_POSTS";

export function getPosts(id) {
  return {
    type: GET_POSTS,
    payload: axios.get(`/api/posts/${id}`)
  };
}
export function updatePost(id, text) {
  return {
    type: UPDATE_POSTS,
    payload: axios.put(`/api/posts/${id}`, { text })
  };
}
export function deletePost(id) {
  return {
    type: DELETE_POSTS,
    payload: axios.delete(`/api/posts/${id}`)
  };
}
export function createPost(username, text, time, userid, locationid) {
  return {
    type: CREATE_POSTS,
    payload: axios.post(`/api/posts`, {
      username,
      text,
      time,
      userid,
      locationid
    })
  };
}

export default function chatReducer(state = initialState, action) {
  console.log(action, state);
  switch (action.type) {
    case `${GET_POSTS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_POSTS}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        posts: action.payload.data
      };
    case `${UPDATE_POSTS}_FULFILLED`:
      return {
        ...state,
        posts: action.payload.data
      };
    case `${DELETE_POSTS}_FULFILLED`:
      return {
        ...state,
        posts: action.payload.data
      };
    case `${CREATE_POSTS}_FULFILLED`:
      return {
        posts: action.payload.data
      };
    default:
      return state;
  }
}
