import { SET_USER } from "./session";

const initialState = {
  byId: {},
  allIds: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      const newState = { ...state };
      if (newState.byId[action.payload.id] === undefined) {
        newState.byId[action.payload.id] = action.payload;
        newState.allIds.push(action.payload.id);
      }
      return newState;
    }
    default:
      return state;
  }
}
