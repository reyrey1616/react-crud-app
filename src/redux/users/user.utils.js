export const editUser = (users, userToEdit) => {
  const newUsers = users.filter((user) => user.email !== userToEdit.email);
  return [...newUsers, userToEdit];
};

export const deleteUser = (users, userToDelete) => {
  const newUsers = users.filter((user) => user.email !== userToDelete.email);
  return [...newUsers];
};
