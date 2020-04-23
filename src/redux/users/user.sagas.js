import { takeLatest, all, call, put } from "redux-saga/effects";
import { getUsers, addNewUser } from "../../firebase/firebase.utils";
import {
  fetchUsersSuccess,
  fetchUsersFailure,
  addNewUserSuccess,
  addNewUserFailure,
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

export function* addUserStart() {
  yield takeLatest(UserActionTypes.ADD_USER_START, addUserAsync);
}

export function* fetchUserStart() {
  yield takeLatest(UserActionTypes.FETCH_USERS_START, fetchUserAsync);
}

export function* userSagas() {
  yield all([call(fetchUserStart), call(addUserStart)]);
}
