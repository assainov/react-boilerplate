/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_SUCCESS,
  REQUEST_LINKS_FAILURE,
  REQUEST_LINKS,
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
