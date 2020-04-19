import UserActionTypes from "./user.types";

export const addNewUser = (user) => ({
  type: UserActionTypes.ADD_NEW_USER,
  payload: user,
});
