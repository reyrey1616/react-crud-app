import UserActionTypes from "./user.types";
import { getUsers } from "../../firebase/firebase.utils";

export const addNewUser = (user) => ({
  type: UserActionTypes.ADD_NEW_USER,
  payload: user,
});

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({
      type: UserActionTypes.FETCH_USERS,
      payload: getUsers(),
    });
  };
};
