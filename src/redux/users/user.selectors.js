import { createSelector } from "reselect";

const selectUser = (state) => state.users;

export const selectAllUsers = createSelector(
  [selectUser],
  (user) => user.users
);
