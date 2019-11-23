import { takeEvery, all } from 'redux-saga/effects'
import * as locationTypes from './location/locationActionTypes';
import * as locationsTypes from './locations/locationsActionTypes';

function* showError() {
  yield alert('Something went wrong, try again later')
}

function* watchError() {
  yield takeEvery(locationTypes.FETCH_LOCATION_FAILURE, showError);
  yield takeEvery(locationsTypes.FIND_LOCATIONS_FAILURE, showError);
}

export default function* rootSaga() {
  yield all([
    watchError()
  ])
}