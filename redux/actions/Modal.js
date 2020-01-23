import * as Action from '../constant';
export const Toggle_PopUp = (value, adID) => {
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
export const toggleSignUp = payload => {
  return {
    type: Action.TOGGLE_SIGN_UP,
    payload,
  };
};
export const toggleReg = payload => {
  return {
    type: Action.TOGGLE_REG,
    payload,
  };
};
