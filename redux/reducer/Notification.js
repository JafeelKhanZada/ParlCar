import * as Action from '../constant';
const initState = {
  Notifcation: [],
  getNot: false,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_NOTIFICATION: {
      return {
        ...state,
        Notifcation: action.payload,
      };
    }
    case Action.TOGGLE_NOTI: {
      return {
        ...state,
        getNot: !state.getNot,
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
