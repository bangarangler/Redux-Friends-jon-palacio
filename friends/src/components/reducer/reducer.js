import { LOGIN_START, LOGIN_START } from "../actions/actions.js";
const initialState = {
  friends: [],
  deletingFriends: false,
  fetchingFriends: false,
  loggingIn: false,
  savingFriends: false,
  updatingFriends: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        friends: [...state.friends, action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
