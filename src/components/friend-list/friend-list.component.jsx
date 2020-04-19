import React from "react";
import { FriendListContainer } from "./friend-list.styles";
import Card from "../card/card.component";
const FriendList = ({ data }) => (
  <FriendListContainer>
    {data.map((item) => (
      <Card data={item} />
    ))}
  </FriendListContainer>
);

export default FriendList;
