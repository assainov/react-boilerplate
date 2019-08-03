import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { requestLinksSuccess, requestLinksFailure } from './actions';
import { REQUEST_LINKS } from './constants';

function fetchLinksFromServer(topicName) {
  return fetch(`/api/topics/${topicName}/links`).then(response => response.json());
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topicName);
    yield put(requestLinksSuccess(links));
  } catch (error) {
    yield put(requestLinksFailure(error.message));
  }
}

export function* fetchLinksSaga() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks);
}

// All sagas to be loaded
export default [
  fetchLinksSaga,
];
