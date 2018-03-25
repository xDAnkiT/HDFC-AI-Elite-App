/**
 * Author: Ankit Jain
 * Project Name: ADCAT App
 * Date: 24-March-2018
 */

import {
  FETCH_QUIZES,
  FETCH_QUIZES_SUCCEEDED,
  FETCH_QUIZES_FAILED
} from "./actionTypes";

export const getQuizAction = (params) => {
  return { type: FETCH_QUIZES };
};

//Redux saga callbacks
export const getQuizSuccessAction = retrivedQuizes => {
  return { type: FETCH_QUIZES_SUCCEEDED, retrivedQuizes };
};

//Redux saga callback fallback action
export const getQuizFailedAction = error => {
  return { type: FETCH_QUIZES_FAILED, error };
};
