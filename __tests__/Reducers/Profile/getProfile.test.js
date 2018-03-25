import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';

import {FETCH_PROFILE_DETAILS, FETCH_PROFILE_DETAILS_SUCCEEDED, FETCH_PROFILE_DETAILS_FAILED} from '../../../src/Actions/Profile/actionTypes';
import getProfileReducer from '../../../src/Reducers/Profile/getProfile';

describe('Get profile reducer', () => {

  it('Has a default state', () => {
    expect(getProfileReducer(undefined, {type: 'undefined'})).toEqual({isFetching: false})
  })

  it('Has a [FETCH_PROFILE_DETAILS] state', () => {
    expect(getProfileReducer(undefined, {
      type: 'FETCH_PROFILE_DETAILS',
      payload: {
        isFetching: true
      }
    })).toEqual({isFetching: true})
  })

  it('Has a [FETCH_PROFILE_DETAILS_SUCCEEDED] state', () => {
    expect(getProfileReducer(undefined, {
      type: 'FETCH_PROFILE_DETAILS_SUCCEEDED',
      payload: {
        isFetching: false
      }
    })).toEqual({isFetching: false})
  })
})