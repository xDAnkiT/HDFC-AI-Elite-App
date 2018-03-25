/**
 * Author: Ankit Jain
 * Project Name: Icicle App
 * Date: 01-March-2018
 */

import { StackNavigator } from "react-navigation";
import {
  Animated,
  BackHandler,
  Easing,
  Platform,
} from 'react-native';

import SplashScreen from '../Components/SplashScreen';
import WelcomeScreen from '../Components/WelcomeScreen';
import TwitterLogin from '../Components/TwitterLogin';
import QuizContainer from '../Containers/QuizContainer';

//Container elements
import ProfileContainer from '../Containers/ProfileContainer';

const navigator = StackNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  WelcomeScreen: {
    screen: WelcomeScreen
  },
  TwitterLogin: {
    screen: TwitterLogin
  },
  QuizScreen: {
    screen: QuizContainer
  },
  ProfileScreen: {
    screen: ProfileContainer
  }
},{
  headerMode: 'screen' 
});

export default navigator;
