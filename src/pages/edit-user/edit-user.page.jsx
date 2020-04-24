import React from "react";
import { connect } from "react-redux";
import { selectUserToEdit } from "../../redux/users/user.selectors";
import EditUserForm from "../../components/edit-user-form/edit-user-form.component";
const EditUserPage = ({ userDetails }) => {
  console.log(userDetails);
  return (
    <div className="page-layout sign-up-page">
      <EditUserForm user={userDetails[0]} />
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  userDetails: selectUserToEdit(ownProps.match.params.email)(state),
});
export default connect(mapStateToProps)(EditUserPage);
