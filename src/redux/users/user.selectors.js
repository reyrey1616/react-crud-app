import { createSelector } from "reselect";

const selectUser = (state) => state.users;

export const selectUsers = createSelector([selectUser], (user) => user.users);

export const selectIsUsersLoaded = createSelector(
  [selectUser],
  (users) => !!users.users
);

export const selectUserToEdit = (userEmail) =>
  createSelector([selectUsers], (user) =>
    user.filter((item) => userEmail === item.email)
  );
