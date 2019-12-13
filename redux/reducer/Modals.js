import * as Action from '../constant';
const initState = {
  Login: false,
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
  }
};
export default ModalReducer;
