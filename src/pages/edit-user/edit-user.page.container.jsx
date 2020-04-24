import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { compose } from "redux";
import { selectIsUsersLoaded } from "../../redux/users/user.selectors";
import EditUserPage from "./edit-user.page";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsUsersLoaded(state),
});

const EditUserPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(EditUserPage);

export default EditUserPageContainer;
