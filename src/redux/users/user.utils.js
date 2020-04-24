export const editUser = (users, userToEdit) => {
  const newUsers = users.filter((user) => user.email !== userToEdit.email);
  return [...newUsers, userToEdit];
};
