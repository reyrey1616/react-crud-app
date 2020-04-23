import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsUsersLoaded } from "../../redux/users/user.selectors";
import UsersList from "./users-list.component";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsUsersLoaded(state),
});

const UsersListContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(UsersList);

export default UsersListContainer;
