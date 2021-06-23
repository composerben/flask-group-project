//this works, don't bother checking

const INCREMENT = "reaction/INCREMENT";
const DECREMENT = "reaction/DECREMENT";

const likeReaction = (userId, postId) => ({
  type: INCREMENT,
  payload: {
    userId,
    postId,
  },
});

const hateReaction = (userId, postId) => ({
  type: DECREMENT,
  payload: {
    userId,
    postId,
  },
});

export const likePost = (userId, postId) => async (dispatch) => {
  const response = await fetch(`/api/post_reaction/${postId}-${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userId, postId),
  });
  if (response.ok) {
    const reaction = await response.json();

    dispatch(likeReaction(reaction));
    return reaction;
  }
};

export const hatePost = (userId, postId) => async (dispatch) => {
  const response = await fetch(`/api/post_reaction/${postId}-${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userId, postId),
  });
  if (response.ok) {
    const reaction = await response.json();

    dispatch(hateReaction(reaction));
    return reaction;
  }
};

const initialState = {};

export default function postReactionReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      const newState = { ...state };
      const { postId, userId } = action.payload;
      newState[postId][userId] = true;
      return newState;
    }
    case DECREMENT: {
      const newState = { ...state };
      const { postId, userId } = action.payload;
      newState[postId][userId] = false;
      return newState;
    }
    default:
      return state;
  }
}
