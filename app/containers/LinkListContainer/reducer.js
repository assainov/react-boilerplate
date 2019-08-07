/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { REQUEST_LINKS_SUCCESS, UPVOTE_LINK_SUCCESS, UPVOTE_LINK_FAILURE } from './constants';
import { ADD_LINK_SUCCESS } from '../LinkFormContainer/constants';

const initialState = fromJS({
  links: [],
});

function addLink(state, link) {
  const links = state.get('links');
  links.push(link);

  return state.set('links', links);
}

function upvoteLink(state, serverLink) {
  const links = state.get('links');
  const newLinks = links.slice();
  const linkIndex = links.findIndex(l => l.id === serverLink.id);

  newLinks[linkIndex] = serverLink;
  return state.set('links', newLinks);
}

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINKS_SUCCESS:
      return state.set('links', action.links);
    case ADD_LINK_SUCCESS:
      return addLink(state, action.link);
    case UPVOTE_LINK_SUCCESS:
      return upvoteLink(state, action.link);
    case UPVOTE_LINK_FAILURE:
      // TODO: handle double upvoting error
      return state;
    default:
      return state;
  }
}

export default linkListContainerReducer;
