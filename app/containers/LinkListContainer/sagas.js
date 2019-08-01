import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { requestLinksSuccess, requestLinksFailure } from './actions';

function fetchLinksFromServer(topic) {
  return fetch(`/api/topics/${topic.name}/links`).then(response => response.json());
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    yield put(requestLinksSuccess(links));
  } catch (error) {
    yield put(requestLinksFailure(error.message));
  }
}

export function* fetchLinksSaga() {
  yield takeLatest(SELECT_TOPIC, fetchLinks);
}

// All sagas to be loaded
export default [
  fetchLinksSaga,
];
