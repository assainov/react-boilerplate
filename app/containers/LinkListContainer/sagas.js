import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import { requestLinksSuccess, requestLinksFailure } from './actions';
import { REQUEST_LINKS, START_ADD } from './constants';
import { fetchLinksFromServer } from '../../api';

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

function* startAdd(action) {
  yield put(push(`/topics/${action.topicName}/add`));
}

export function* startAddSaga() {
  yield* takeLatest(START_ADD, startAdd);
}

// All sagas to be loaded
export default [
  fetchLinksSaga,
  startAddSaga,
];
