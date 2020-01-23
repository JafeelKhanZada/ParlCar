import * as Action from '../constant';
import * as Actions from './index';
export const setSearch = payload => {
  return {
    type: Action.SET_SEARCH,
    payload,
  };
};
export const resetSearch = () => {
  return {
    type: Action.DEFAULT_SEARCH,
  };
};
export const setSpecificSearch = e => {
  return dispatch => {
    dispatch(Actions.models(e.val));
    dispatch({
      type: Action.SET_SPECIFIC_SEARCH,
      payload: e,
    });
  };
};
