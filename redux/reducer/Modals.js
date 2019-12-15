import * as Action from '../constant';
const initState = {
  Login: false,
  Tab: 'BRAND',
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
    case Action.TOGGLEBUTTON: {
      return {
        ...state,
        Tab: action.payload,
      };
    }
  }
};
export default ModalReducer;
