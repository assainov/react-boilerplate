/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_SUCCESS,
  REQUEST_LINKS_FAILURE,
  REQUEST_LINKS,
  START_ADD,
  UPVOTE_LINK,
  UPVOTE_LINK_SUCCESS,
  UPVOTE_LINK_FAILURE,
} from './constants';

export function requestLinksSuccess(links) {
  return {
    type: REQUEST_LINKS_SUCCESS,
    links,
  };
}

export function requestLinksFailure(message) {
  return {
    type: REQUEST_LINKS_FAILURE,
    message,
  };
}

export function requestLinks(topicName) {
  return {
    type: REQUEST_LINKS,
    topicName,
  };
}

export function startAdd(topicName) {
  return {
    type: START_ADD,
    topicName,
  };
}

export function upvoteLink(linkId) {
  return {
    type: UPVOTE_LINK,
    linkId,
  };
}

export function upvoteLinkSuccess(link) {
  return {
    type: UPVOTE_LINK_SUCCESS,
    link,
  };
}

export function upvoteLinkFailure() {
  return {
    type: UPVOTE_LINK_FAILURE,
  };
}
