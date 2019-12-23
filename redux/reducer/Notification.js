import * as Action from '../constant';
const initState = {
  Notifcation: [],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_NOTIFICATION: {
      return {
        ...state,
        Notifcation: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default reducer;
