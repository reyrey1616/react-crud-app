import React from "react";
import { UserListContainer } from "./users-list.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUsers } from "../../redux/users/user.selectors";
import Card from "../user-profile/user-card.component";
const UserList = ({ users }) => {
  return (
    <UserListContainer>
      {users.map((item, key) => (
        <Card data={item} key={key} />
      ))}
    </UserListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
});
export default connect(mapStateToProps)(UserList);
