/**
 * Author: Ankit Jain
 * Project Name: Icicle App
 * Date: 01-March-2018
 */

import { AsyncStorage } from "react-native";

import { NavigationActions } from "react-navigation";

import {
  FETCH_PROFILE_DETAILS,
  FETCH_PROFILE_DETAILS_SUCCEEDED,
  FETCH_PROFILE_DETAILS_FAILED,
  UPDATE_PROFILE_PICTURE,
  UPDATE_PROFILE_PICTURE_SUCCEEDED,
  UPDATE_PROFILE_PICTURE_FAILED
} from "../Actions/Profile/actionTypes";

import {
  FETCH_QUIZES,
  FETCH_QUIZES_SUCCEEDED,
  FETCH_QUIZES_FAILED
} from "../Actions/Quiz/actionTypes";

import { Api } from "./Api";

import * as Helper from "../utils/Helper";

//Saga effects
import { put, takeLatest } from "redux-saga/effects";

/*Fetch associated profile magic function */
function* fetchProfileDetails(action) {
  try {
    const result = yield Api.getuserDetailsApi(action.params);
    if (!Helper.isEmpty(result)) {
      yield put({
        type: FETCH_PROFILE_DETAILS_SUCCEEDED,
        retrivedProfile: result
      });
    } else {
      yield put({ type: FETCH_PROFILE_DETAILS_FAILED });
    }
  } catch (error) {
    yield put({ type: FETCH_PROFILE_DETAILS_FAILED, error });
  }
}

/*Fetch associated profile magic function */
function* fetchQuizes(action) {
  try {
    const result = yield Api.getQuizesApi(action.params);
    if (!Helper.isEmpty(result)) {
      console.log("Success aa gaya re: " + JSON.stringify(result));
      yield put({ type: FETCH_QUIZES_SUCCEEDED, retrivedQuizes: result });
    } else {
      console.log("Failed aa gaya re: " + JSON.stringify(result));
      yield put({ type: FETCH_PROFILE_DETAILS_FAILED });
    }
  } catch (error) {
    console.log("Catch me aakr fat gaya re: " + JSON.stringify(error));
    yield put({ type: FETCH_PROFILE_DETAILS_FAILED, error });
  }
}

export function* watchGetProfileDetails() {
  yield takeLatest(FETCH_PROFILE_DETAILS, fetchProfileDetails);
}

export function* watchFetchQuizes() {
  yield takeLatest(FETCH_QUIZES, fetchQuizes);
}
