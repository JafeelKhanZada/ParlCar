import * as Action from '../constant';
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
