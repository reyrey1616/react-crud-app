import React from "react";
import { UserListContainer } from "./users-list.styles";
import Card from "../user-profile/user-card.component";
const UserList = ({ data }) => (
  <UserListContainer>
    {data.map((item, key) => (
      <Card data={item} key={key} />
    ))}
  </UserListContainer>
);

export default UserList;
