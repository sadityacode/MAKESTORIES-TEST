import * as types from "./types";

/**
 *
 * Store/Reset/Remove data dynamically based on .
 * @param {Object} payload - API response on success/error/loading
 * @param {String} type - type for sucess/error/loading
 */

export const isDataLoading = (payload = null, type = types.DATA_LOADING) => {
  return {
    type,
    payload
  };
};
