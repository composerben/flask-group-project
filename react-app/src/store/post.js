const GET_POST = "post/SET_POST";
const DELETE_POST = "post/DELETE_POST";
const POST_POST = "post/POST";
// const GET_POST_BY_USER = "post/GET_POST_BY_USER"

const getPosts = (posts) => ({
  type: GET_POST,
  posts,
});

const postPost = (post) => ({
  type: POST_POST,
  post
})

const deletePost = (post) => ({
  type: DELETE_POST,
  post
})

export const getAllPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts");
  const data = await response.json();

  console.log("----------------", data)
  dispatch(getPosts(data.posts));
};

export const getPostsByUserId = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/posts`);
  const data = await res.json();

  dispatch(getPosts(data.posts))
}

export const postOnePost = (data) => async (dispatch) => {
  const res = await fetch('/api/posts', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })

  if (res.ok) {
    const post = await res.json()

    dispatch(postPost(post))
    return post
  }
}

export const deleteOnePost = (postId) => async (dispatch) => {
  const res = await fetch(`/api/posts/${postId}`, {
    method: "DELETE"
  })
  if (res.ok) {
    dispatch(deletePost(postId))
  }
}

const initialState = {};

export default function postReducer(state = initialState, action){
  switch (action.type) {
    case GET_POST: {
      const allPosts = {};
      action.posts.forEach((post) => {
        allPosts[post.id] = post;
      });
      return allPosts;
    }
    case POST_POST: {
      const newState = {...state}
      newState[action.newState] = action.newState;
      return newState
    }
    case DELETE_POST: {
      const newState = {...state}
      delete newState[action.post];
      return newState
    }
    // case GET_POST_BY_USER: {
    //   const newState = {...state}
    //   action.posts.forEach((post))
    // }

    default:
      return state;
  }
};
