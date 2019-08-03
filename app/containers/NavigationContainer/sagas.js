import { REQUEST_TOPICS, SELECT_TOPIC } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { requestTopicsSuccess, requestTopicsFailure } from './actions';
import { push } from 'react-router-redux';

export function fetchTopicsFromServer() {
  return fetch('/api/topics')
    .then(result => result.json());
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSuccess(topics));
  } catch (error) {
    yield put(requestTopicsFailure(error.message));
  }
}

// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

function* pushTopic(action) {
  yield put(push(`/topics/${action.topic.name}`));
}


export function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopic);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
  selectTopicSaga,
];
