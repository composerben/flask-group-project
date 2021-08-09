import { SET_USER } from "./session";

// action creators
const getUser = (data) => ({
  type: SET_USER,
  payload: data,
});

// thunks
export const fetchUser = (userId) => async (dispatch) => {
  try {
    const res = await fetch(`/api/users/${userId}`);
    if (res.ok) {
      const user = await res.json();
      dispatch(getUser(user));
    }
  } catch (e) {
    return e;
  }
};

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
