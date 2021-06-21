const GET_POST = "post/SET_POST";
const REMOVE_POST = "post/REMOVE_POST";
const POST_POST = "post/POST";

const getPosts = (posts) => ({
  type: GET_POST,
  posts,
});

const postPost = (post) => ({
  type: POST_POST,
  post
})

export const getAllPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts");
  const data = await response.json();

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
  }
}

const initialState = {};

export default function postReducer(state = initialState, action){
  switch (action.type) {
    case GET_POST:
      const allPosts = {};
      action.posts.forEach((post) => {
        allPosts[post.id] = post;
      });
      return allPosts;
    default:
      return state;
  }
};
