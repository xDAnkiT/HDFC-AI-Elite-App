/**
 * Author: Ankit Jain
 * Project Name: Icicle App
 * Date: 01-March-2018
 */

import {
  FETCH_QUIZES,
  FETCH_QUIZES_SUCCEEDED,
  FETCH_QUIZES_FAILED
} from "../../Actions/Quiz/actionTypes";

const getQuizesReducer = (
  quizes = {
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case FETCH_QUIZES:
      return Object.assign({}, quizes, { isFetching: true });
    case FETCH_QUIZES_SUCCEEDED:
      return Object.assign({}, quizes, {
        isFetching: false,
        items: action.retrivedQuizes
      });
    case FETCH_QUIZES_FAILED:
      return Object.assign({}, quizes, {
        isFetching: false,
        items: quizes
      });
    default:
      return quizes; //No state changes ie no profile found
  }
};

export default getQuizesReducer;
