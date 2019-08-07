import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import { requestLinksSuccess, requestLinksFailure, upvoteLinkSuccess, upvoteLinkFailure } from './actions';
import { REQUEST_LINKS, START_ADD, UPVOTE_LINK } from './constants';
import { fetchLinksFromServer, upvoteLinkOnServer } from '../../api';

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

function* upvoteLink(action) {
  try {
    const serverLink = yield call(upvoteLinkOnServer, action.linkId);
    yield put(upvoteLinkSuccess(serverLink));
  } catch (error) {
    yield put(upvoteLinkFailure());
  }
}

export function* upvoteLinkSaga() {
  yield* takeLatest(UPVOTE_LINK, upvoteLink);
}

// All sagas to be loaded
export default [
  fetchLinksSaga,
  startAddSaga,
  upvoteLinkSaga,
];
