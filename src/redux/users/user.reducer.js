import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  users: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.ADD_USER:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};

export default userReducer;
