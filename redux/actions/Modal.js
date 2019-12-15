import * as Action from '../constant';
export const Toggle_PopUp = value => {
  return {
    type: Action.TOGGLEPOPUP,
    payload: value,
  };
};
export const toggleLoader = payload => {
  return {
    type: Action.TOGGLE_LOADER,
    payload,
  };
};
export const toggleButton = payload => {
  return {
    type: Action.TOGGLEBUTTON,
    payload,
  };
};
