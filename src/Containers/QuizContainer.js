/**
 * Author: Ankit Jain
 * Project Name: Icicle App
 * Date: 01-March-2018
 */

import { connect } from "react-redux";
import QuizScreen from "../Components/QuizScreen";

import { getQuizAction } from "../Actions/Quiz";

const mapStateToProps = state => {
    console.log("Inside contaienr result: "+state.getQuizesReducer);
    console.log(state.getQuizesReduce);
  return {
    quizes: state.getQuizesReducer.items,
    isFetching: state.getQuizesReducer.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchQuizes: (params) => {
        console.log("yaha to aai request");
      dispatch(getQuizAction(params));
    }
  };
};
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
export default ProfileContainer;
