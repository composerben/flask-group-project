const GET_POST = "post/SET_POST";
const DELETE_POST = "post/DELETE_POST";
const POST_POST = "post/POST";

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
  dispatch(getPosts(data));
};

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

export const deleteOnePost = (data) => async (dispatch) => {
  const res = await fetch(`/api/posts/${data}`, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (res.ok) {
    const post = await res.json()
    console.log("------------------------", post)

    dispatch(deletePost(post))
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
      delete newState[action.data.id];
      return newState
    }

    default:
      return state;
  }
};
