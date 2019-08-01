/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_SUCCESS,
  REQUEST_LINKS_FAILURE,
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

