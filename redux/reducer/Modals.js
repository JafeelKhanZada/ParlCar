import * as Action from '../constant';
const initState = {
  Login: false,
  Tab: 'BRAND',
  Show: false,
  SignUp: false,
  Reg: false,
};
const ModalReducer = (state = initState, action) => {
  switch (action.type) {
    default: {
      return {
        ...state,
      };
    }
    case Action.TOGGLEPOPUP: {
      return {
        ...state,
        Login: action.payload,
      };
    }
    case Action.TOGGLE_REG: {
      return {
        ...state,
        Reg: action.payload,
      };
    }
    case Action.TOGGLEBUTTON: {
      return {
        ...state,
        Tab: action.payload,
      };
    }
    case Action.TOGGLE_SIGN_UP: {
      return {
        ...state,
        SignUp: action.payload,
      };
    }
  }
};
export default ModalReducer;
