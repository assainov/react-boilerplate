import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';

import { createLink } from '../../api';
import { ADD_LINK, ADD_LINK_CANCELLED } from './constants';
import { addLinkSuccess, addLinkFailure } from './actions';

function* addLink(action) {
  try {
    const serverLink = yield call(createLink, action.link);
    yield put(addLinkSuccess(serverLink));
    yield put(goBack());
  } catch (error) {
    yield put(addLinkFailure(action.link, error.message));
  }
}

export function* addLinkSaga() {
  yield* takeLatest(ADD_LINK, addLink);
}

export function* addLinkCancelledSaga() {
  yield* takeLatest(ADD_LINK_CANCELLED, () => put(goBack()));
}


// All sagas to be loaded
export default [
  addLinkSaga,
  addLinkCancelledSaga,
];
