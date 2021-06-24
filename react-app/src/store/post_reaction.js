//this works, don't bother checking

const INCREMENT = "reaction/INCREMENT";
const DECREMENT = "reaction/DECREMENT";

const likeReaction = (reaction) => ({
  type: INCREMENT,
  reaction,
});

const hateReaction = (reaction) => ({
  type: DECREMENT,
  reaction,
});

const initialState = {};

// separate likes and hates onto post
// query likes and hates at page-load

export default function postReactionReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      const newState = { ...state };
      const { post_id: postId } = action.reaction.post_reaction;
      const { count_likes: countLikes, count_hates: countHates } =
        action.reaction;
      newState[postId] = {
        reaction: true,
        likes: countLikes,
        hates: countHates,
      };
      return newState;
    }
    case DECREMENT: {
      const newState = { ...state };
      const { post_id: postId } = action.reaction.post_reaction;
      const { count_likes: countLikes, count_hates: countHates } =
        action.reaction;
      newState[postId] = {
        reaction: true,
        likes: countLikes,
        hates: countHates,
      };
      return newState;
    }
    default:
      return state;
  }
}
