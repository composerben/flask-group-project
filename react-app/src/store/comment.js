import GET_POST from "./post";

const GET_COMMENT = "comment/SET_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";
export const COMMENT_COMMENT = "comment/COMMENT";
const EDIT_COMMENT = "comment/EDIT_COMMENT";
// const UPDATE_REACTION = "reaction/UPDATE_REACTION";

// const updateReaction = (reaction) => ({
//   type: UPDATE_REACTION,
//   reaction,
// });

const getComments = (comments) => ({
  type: GET_COMMENT,
  comments,
});

const commentComment = (comment) => ({
  type: COMMENT_COMMENT,
  comment,
});

const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  comment,
});

const editComment = (comment) => ({
  type: EDIT_COMMENT,
  comment,
});

export const getAllComments = () => async (dispatch) => {
  const response = await fetch("/api/comments");
  const data = await response.json();

  dispatch(getComments(data.comments));
};

export const getCommentsByUserId = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/comments`);
  const data = await res.json();

  dispatch(getComments(data.comments));
};

export const editOneComment = (commentId, body) => async (dispatch) => {
  const res = await fetch(`/api/comments/${commentId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  dispatch(editComment(data.comment));
};

export const commentOneComment = (data) => async (dispatch) => {
  const res = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const comment = await res.json();
    dispatch(commentComment(comment.comment));
    return comment;
  }
};

export const deleteOneComment = (commentId) => async (dispatch) => {
  const res = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteComment(commentId));
  }
};

// export const likeComment = (commentId) => async (dispatch) => {
//   const response = await fetch(`/api/comment_reaction/${commentId}/True`, {
//     method: "COMMENT",
//   });
//   if (response.ok) {
//     const reaction = await response.json();

//     dispatch(updateReaction(reaction));
//     return reaction;
//   }
// };

// export const hateComment = (commentId) => async (dispatch) => {
//   const response = await fetch(`/api/comment_reaction/${commentId}/False`, {
//     method: "COMMENT",
//   });
//   if (response.ok) {
//     const reaction = await response.json();

//     dispatch(updateReaction(reaction));
//     return reaction;
//   }
// };

const initialState = { byId: {}, allIds: [] };

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST: {
      const newState = { ...state };
      action.posts.forEach((post) => {
        const comments = post.comment;
        comments.forEach((comment) => {
          if (newState.byId[comment.id] === undefined) {
            newState.byId[comment.id] = comment;
            newState.allIds.push(comment.id);
          }
        });
      });
      return newState;
    }
    case GET_COMMENT: {
      const newState = { ...state };
      action.comments.forEach((comment) => {
        if (state.byId[comment] === undefined) {
          newState.byId[comment.id] = comment;
          newState.allIds.push(comment.id);
        }
      });
      return newState;
    }
    case COMMENT_COMMENT: {
      const newState = { ...state };
      newState[action.newState] = action.newState;
      return newState;
    }
    case DELETE_COMMENT: {
      const newState = { ...state };
      delete newState[action.comment];
      return newState;
    }
    case EDIT_COMMENT: {
      const newState = { ...state };
      const theId = action.comment.id;
      const theCaption = action.comment.body;
      newState[theId]["body"] = theCaption;
      return newState;
    }
    // case UPDATE_REACTION: {
    //   const newState = { ...state };
    //   const { comment_id: commentId } = action.reaction.comment_reaction;
    //   const { count_likes: countLikes, count_hates: countHates } =
    //     action.reaction;
    //   newState[commentId]["likes"] = countLikes;
    //   newState[commentId]["hates"] = countHates;
    //   return newState;
    // }
    default:
      return state;
  }
}
