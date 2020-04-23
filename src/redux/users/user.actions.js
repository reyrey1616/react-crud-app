import UserActionTypes from "./user.types";

export const addNewUserStart = (user) => ({
  type: UserActionTypes.ADD_USER_START,
  payload: user,
});

export const addNewUserSuccess = (user) => ({
  type: UserActionTypes.ADD_USER_SUCCESS,
  payload: user,
});

export const addNewUserFailure = (error) => ({
  type: UserActionTypes.ADD_USER_FAILURE,
  payload: error,
});

export const fetchUsersStart = () => ({
  type: UserActionTypes.FETCH_USERS_START,
});

export const fetchUsersSuccess = (users) => ({
  type: UserActionTypes.FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: UserActionTypes.FETCH_USERS_FAILURE,
  payload: error,
});

export const deleteUser = (user) => ({
  type: UserActionTypes.DELETE_USER,
  payload: user,
});
