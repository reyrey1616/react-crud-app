import { takeLatest, all, call, put } from "redux-saga/effects";
import { getUsers, addNewUser, editUser } from "../../firebase/firebase.utils";
import {
  fetchUsersSuccess,
  fetchUsersFailure,
  addNewUserSuccess,
  addNewUserFailure,
  editUserSuccess,
  editUserFailure,
} from "./user.actions";
import UserActionTypes from "./user.types";

// FETCH USER
export function* fetchUserAsync() {
  try {
    const users = yield call(getUsers);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

// ADD USER
export function* addUserAsync({ payload }) {
  try {
    const newUser = yield call(addNewUser, payload);
    if (newUser.exists === true) {
      yield put(addNewUserFailure("User already exists"));
    } else {
      yield put(addNewUserSuccess(newUser));
    }
  } catch (error) {
    yield put(addNewUserFailure(error));
  }
}

// EDIT USER
export function* editUserAsync({ payload }) {
  try {
    const userToEdit = yield call(editUser, payload);

    if (userToEdit.exists) {
      yield put(editUserFailure("Email is already in used"));
    } else {
      yield put(editUserSuccess(payload));
    }
  } catch (error) {
    yield put(editUserFailure(error));
  }
}

export function* addUserStart() {
  yield takeLatest(UserActionTypes.ADD_USER_START, addUserAsync);
}

export function* fetchUserStart() {
  yield takeLatest(UserActionTypes.FETCH_USERS_START, fetchUserAsync);
}

export function* editUserStart() {
  yield takeLatest(UserActionTypes.EDIT_USER_START, editUserAsync);
}

export function* userSagas() {
  yield all([call(fetchUserStart), call(addUserStart), call(editUserStart)]);
}
