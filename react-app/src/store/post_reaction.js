//this works, don't bother checking

const INCREMENT = "reaction/INCREMENT";
const DECREMENT = "reaction/DECREMENT";

const likeReaction = (reaction) => ({
  type: INCREMENT,
  reaction
});

const hateReaction = (reaction) => ({
  type: DECREMENT,
  reaction
});

export const likePost = (userId, postId) => async (dispatch) => {
  const response = await fetch(`/api/post_reaction/${postId}-${userId}/like`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userId, postId),
  });
  if (response.ok) {
    const reaction = await response.json();
    console.log('likePost REAACTION', reaction);

    dispatch(likeReaction(reaction));
    return reaction;
  }
};

export const hatePost = (userId, postId) => async (dispatch) => {
  const response = await fetch(`/api/post_reaction/${postId}-${userId}/hate`, {
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
      const {user_id:userId, post_id:postId} = action.reaction.post_reaction;
      newState[`${postId}`] = {[userId]: {'reaction':true}};
      return newState;
    }
    case DECREMENT: {
      const newState = { ...state };
      const {user_id:userId, post_id:postId} = action.reaction.post_reaction;
      newState[`${postId}`] = {[userId]: {'reaction':false}};
      return newState;
    }
    default:
      return state;
  }
}
