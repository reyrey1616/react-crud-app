import UserActionTypes from "./user.types";
import { editUser, deleteUser } from "./user.utils";
const INITIAL_STATE = {
  users: null,
  error: null,
  isFetching: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.ADD_USER_SUCCESS:
      return { ...state, users: [...state.users, action.payload] };

    case UserActionTypes.EDIT_USER_SUCCESS:
      return { ...state, users: editUser(state.users, action.payload) };

    case UserActionTypes.DELETE_USER_SUCCESS:
      return { ...state, users: deleteUser(state.users, action.payload) };

    case UserActionTypes.FETCH_USERS_START:
      return { ...state, isFetching: true };

    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };

    case UserActionTypes.FETCH_USERS_FAILURE:
    case UserActionTypes.ADD_USER_FAILURE:
    case UserActionTypes.EDIT_USER_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;
