/**
 * Author: Ankit Jain
 * Project Name: Icicle App
 * Date: 01-March-2018
 */

 //Saga effects
import { fork, all } from 'redux-saga/effects'
import { 
    watchGetProfileDetails,
    watchFetchQuizes
 } from './authSaga';

export default function* rootSaga() {
    yield all([
        fork(watchGetProfileDetails),
        fork(watchFetchQuizes)
    ]);
}
