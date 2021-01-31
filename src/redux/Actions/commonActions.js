
import { SHOW_LOADING, IS_ERROR } from '../actionTypes';

/**
 * showLoading action creator
 * @param {Boolean} payload - The payload value
 * @returns {Object} action creator
 */
export function isError(payload) {
  return {
    type: IS_ERROR,
    payload
  };
}

export function showLoading(payload) {
  return {
    type: SHOW_LOADING,
    payload
  };
}