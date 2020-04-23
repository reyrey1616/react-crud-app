import React, { useEffect } from "react";
import UsersList from "../../components/users-list/users-list.container";
import { fetchUsersStart } from "../../redux/users/user.actions";
import { connect } from "react-redux";

const HomePage = ({ fetchUsersStart }) => {
  useEffect(() => {
    setTimeout(() => {
      fetchUsersStart();
    }, 2500);
  }, [fetchUsersStart]);
  return (
    <div className="page-layout">
      <h1> Users</h1>
      <UsersList />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchUsersStart: () => dispatch(fetchUsersStart()),
});

export default connect(null, mapDispatchToProps)(HomePage);
