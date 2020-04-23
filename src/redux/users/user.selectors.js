import { createSelector } from "reselect";

const selectUser = (state) => state.users;

export const selectUsers = createSelector([selectUser], (user) => user.users);

export const selectIsUsersLoaded = createSelector(
  [selectUser],
  (users) => !!users.users
);
