const GET_POST = "post/SET_POST";
const REMOVE_POST = "post/REMOVE_POST";

const getPosts = (posts) => ({
  type: GET_POST,
  posts,
});

export const getAllPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts");
  const data = await response.json();

  dispatch(getPosts(data));
};

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
