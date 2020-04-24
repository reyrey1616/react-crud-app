import React from "react";
import UsersList from "../../components/users-list/users-list.container";

const HomePage = () => {
  return (
    <div className="page-layout">
      <h1> Users</h1>
      <UsersList />
    </div>
  );
};

export default HomePage;
