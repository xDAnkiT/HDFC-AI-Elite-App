/**
 * Author: Ankit Jain
 * Project Name: Icicle App
 * Date: 01-March-2018
 */

import {
    FETCH_PROFILE_DETAILS,
    FETCH_PROFILE_DETAILS_SUCCEEDED,
    FETCH_PROFILE_DETAILS_FAILED,
    UPDATE_PROFILE_PICTURE,
    UPDATE_PROFILE_PICTURE_SUCCEEDED,
    UPDATE_PROFILE_PICTURE_FAILED
} from './actionTypes';

export const getProfileDetailsAction = () => {
    return {type: FETCH_PROFILE_DETAILS}
}

export const updateProfilePictureAction = (params) => {
    return {type: UPDATE_PROFILE_PICTURE, params}
}

//Redux saga callbacks
export const getProfileDetailsSuccessAction = (retrivedProfile) => {
    return {type: FETCH_PROFILE_DETAILS_SUCCEEDED, retrivedProfile}
}

export const updateProfilePictureSuccessAction = (retriedUpdatePictureDetails) => {
    return {type: UPDATE_PROFILE_PICTURE_SUCCEEDED, retriedUpdatePictureDetails}
}

//Redux saga callback fallback action
export const getProfileDetailsFailedAction = (error) => {
    return {type: FETCH_PROFILE_DETAILS_FAILED, error}
}

export const updateProfilePictureFailedAction = (error) => {
    return {type: UPDATE_PROFILE_PICTURE_FAILED, error}
}