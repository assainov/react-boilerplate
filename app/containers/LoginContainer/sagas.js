import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';

import { LOGIN, CANCEL_LOGIN } from './constants';

function* loginRedirect() {
  yield put(goBack());
}

export function* loginRedirectSaga() {
  yield* takeLatest(LOGIN, loginRedirect);
}

export function* cancelLoginSaga() {
  yield* takeLatest(CANCEL_LOGIN, loginRedirect);
}

// All sagas to be loaded
export default [
  loginRedirectSaga,
  cancelLoginSaga,
];
