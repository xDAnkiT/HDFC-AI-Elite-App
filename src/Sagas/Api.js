/**
 * Author: Ankit Jain
 * Project Name: Icicle App
 * Date: 01-March-2018
 */


import {AsyncStorage} from 'react-native';
import axios from "axios";

import * as Helper from '../utils/Helper'

/*BASE twitter domain API */
const TWITTER_BASE_URL = 'https://xdankit.auth0.com/';

/*BASE domain API */
const BASE_URL = 'http://10.71.2.151:5000/';

/*Get Twitter authenticated user details API*/
const getUserDetailsURL = 'userinfo'

/*Get quizes API*/
const getQuizURL = 'quiz'

/*Get associated offices list as per member domain method */
function * getuserDetailsApi() {

    //Fetch member profile token from async storage
    let AuthToken = yield Helper.getMemberTokenDetails();
    const response = yield fetch(`${TWITTER_BASE_URL}${getUserDetailsURL}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${AuthToken}`
        }
    });

    const memberProfile = response.status === 200
        ? JSON.parse(response._bodyInit)
        : {};
    return memberProfile;
}


/*Get associated offices list as per member domain method */
function * getQuizesApi(params) {
    console.log("api me aaya");
    
    let config = {
        headers: {
          Accept: "application/json"
        }
      };
    
      const response = yield axios.get(
        `${BASE_URL}${getQuizURL}/${params.type}`,
        config
      );
    
      console.log("Le pakad: " + JSON.stringify(response));
      const quizes = response.status === 200 ? response.data : {};
      return quizes;
}

export const Api = {
    getuserDetailsApi,
    getQuizesApi
};