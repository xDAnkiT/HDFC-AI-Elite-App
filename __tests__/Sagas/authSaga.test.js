import assert from 'assert'
import {call, put} from 'redux-saga/effects'

import {FETCH_PROFILE_DETAILS, FETCH_PROFILE_DETAILS_SUCCEEDED, FETCH_PROFILE_DETAILS_FAILED} from '../../src/Actions/Profile/actionTypes';
import {fetchProfileDetails} from '../../src/Sagas/authSaga';

import {Api} from '../../src/Sagas/Api';

describe('Auth Saga [Watch fetch Profile] saga', () => {
  describe('getProfileDetails()', () => {
    const generator = fetchProfileDetails();
    it('Should return the getProfileDetails call', () => {
      assert.deepEqual(generator.next().value, call(Api.getuserDetailsApi()))
    });
    
    it('Should return getProfileDetailsSuccess action', () => {
      assert.deepEqual(generator.next().value, 
      put({type: FETCH_PROFILE_DETAILS_SUCCEEDED}))
    });

    it('Should return getProfileDetailsFailed action', () => {
      assert.deepEqual(generator.next().value, 
      put({type: FETCH_PROFILE_DETAILS_FAILED}))
    });


    it('Should be finished', () => {
      assert.deepEqual(generator.next().done, true)
    });

  })
})