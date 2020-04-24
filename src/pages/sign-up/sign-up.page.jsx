import React from "react";
import AddUserForm from "../../components/add-user-form/add-user-form.component";
const SignUp = ({ match }) => {
  return (
    <div className="page-layout sign-up-page">
      <AddUserForm />
    </div>
  );
};

export default SignUp;
