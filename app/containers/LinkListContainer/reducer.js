/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { REQUEST_LINKS_SUCCESS } from './constants';

const initialState = fromJS({
  links: [],
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINKS_SUCCESS:
      return state.set('links', action.links);
    default:
      return state;
  }
}

export default linkListContainerReducer;
