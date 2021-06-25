import { COMMENT_COMMENT } from "./comment";


const GET_POST = "post/SET_POST";
const DELETE_POST = "post/DELETE_POST";
const POST_POST = "post/POST";
const EDIT_POST = "post/EDIT_POST";
const UPDATE_REACTION = "reaction/UPDATE_REACTION";


const updateReaction = (reaction) => ({
  type: UPDATE_REACTION,
  reaction,
});

const getPosts = (posts) => ({
  type: GET_POST,
  posts,
});

const postPost = (post) => ({
  type: POST_POST,
  post,
});

const deletePost = (post) => ({
  type: DELETE_POST,
  post,
});

const editPost = (post) => ({
  type: EDIT_POST,
  post,
});


export const getAllPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts");
  const data = await response.json();

  console.log("----------------", data);
  dispatch(getPosts(data.posts));
};

export const getPostsByUserId = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/posts`);
  const data = await res.json();

  dispatch(getPosts(data.posts));
};

export const editOnePost = (postId, caption) => async (dispatch) => {
  const res = await fetch(`/api/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(caption),
  });
  const data = await res.json();

  dispatch(editPost(data.post));
};

export const postOnePost = (data) => async (dispatch) => {
  const res = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const post = await res.json();

    dispatch(postPost(post));
    return post;
  }
};

export const deleteOnePost = (postId) => async (dispatch) => {
  const res = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deletePost(postId));
  }
};

export const likePost = (postId) => async (dispatch) => {
  const response = await fetch(`/api/post_reaction/${postId}/True`, {
    method: "POST",
  });
  if (response.ok) {
    const reaction = await response.json();

    dispatch(updateReaction(reaction));
    return reaction;
  }
};

export const hatePost = (postId) => async (dispatch) => {
  const response = await fetch(`/api/post_reaction/${postId}/False`, {
    method: "POST",
  });
  if (response.ok) {
    const reaction = await response.json();

    dispatch(updateReaction(reaction));
    return reaction;
  }
};


const initialState = {};
/*
- use the to_dict method to grab likes/hates from post model
- key into post state and update the like/hate
*/

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST: {
      const allPosts = {};
      action.posts.forEach((post) => {
        allPosts[post.id] = post;
      });
      return allPosts;
    }
    case POST_POST: {
      const newState = { ...state };
      newState[action.newState] = action.newState;
      return newState;
    }
    case DELETE_POST: {
      const newState = { ...state };
      delete newState[action.post];
      return newState;
    }
    case EDIT_POST: {
      const newState = { ...state };
      const theId = action.post.id;
      const theCaption = action.post.caption;
      newState[theId]["caption"] = theCaption;
      return newState;
    }
    case UPDATE_REACTION: {
      const newState = { ...state };
      const { post_id: postId } = action.reaction.post_reaction;
      const { count_likes: countLikes, count_hates: countHates } =
        action.reaction;
      newState[postId]["likes"] = countLikes;
      newState[postId]["hates"] = countHates;
      // newState[postId]["reaction"] = true;
      return newState;
    }
    case COMMENT_COMMENT: {
      const newState = {...state, [action.comment.post_id]:{...state[action.comment.post_id]}};
      const newComments = [...newState[action.comment.post_id].comment, action.comment];
      newState[action.comment.post_id].comment = newComments;
      // console.log('newcomments----', newComments)
      // console.log(action.comment.post_id);
      // console.log('\n\n\n', newState[action.comment.post_id]);
      return newState;
    }
    default:
      return state;
  }
}
