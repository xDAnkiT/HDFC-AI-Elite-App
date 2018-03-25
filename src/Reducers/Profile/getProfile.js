/**
 * Author: Ankit Jain
 * Project Name: Icicle App
 * Date: 01-March-2018
 */

import {FETCH_PROFILE_DETAILS, FETCH_PROFILE_DETAILS_SUCCEEDED, FETCH_PROFILE_DETAILS_FAILED} from '../../Actions/Profile/actionTypes';

const getProfileReducer = (profile = {
    isFetching: false
}, action) => {
    switch (action.type) {
        case FETCH_PROFILE_DETAILS:
            return Object.assign({}, profile, {isFetching: true})
        case FETCH_PROFILE_DETAILS_SUCCEEDED:
            return Object.assign({}, profile, {
                isFetching: false,
                items: action.retrivedProfile
            })
        case FETCH_PROFILE_DETAILS_FAILED:
            return Object.assign({}, profile, {
                isFetching: false,
                items: profile
            })
        default:
            return profile; //No state changes ie no profile found
    }
}

export default getProfileReducer;