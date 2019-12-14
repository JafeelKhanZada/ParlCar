import * as Action from '../constant';
const initState = {
  auth: true,
  UserData: [],
  ID: null
};
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.TOGGLE_AUTH: {
      return {
        ...state,
        auth: action.payload,
      };
    }
    case Action.SET_USER_AUTHENTICATE: {
      return {
        ...state,
        UserData: action.payload
      }
    }
    case Action.SET_USER_ID: {
      return {
        ...state,
        ID: action.payload
      }
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default Reducer;
