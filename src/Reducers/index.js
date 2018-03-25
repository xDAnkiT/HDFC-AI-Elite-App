/**
 * Author: Ankit Jain
 * Project Name: Icicle App
 * Date: 01-March-2018
 */

import { combineReducers } from "redux";
import NavigationReducer from "./navigationReducer";
import getProfileReducer from './Profile/getProfile';
import getQuizesReducer from './Quiz/getQuizes';


const AppReducer = combineReducers({
  getQuizesReducer,
  getProfileReducer,
  NavigationReducer
});

export default AppReducer;
