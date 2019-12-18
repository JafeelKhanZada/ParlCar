import * as Action from '../constant';
const initState = {
  auth: false,
  UserData: [],
  ID: null,
  token: null,
  Type: 'user',
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
        UserData: action.payload,
      };
    }
    case Action.SET_USER_ID: {
      return {
        ...state,
        ID: action.payload,
      };
    }
    case Action.SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case Action.LOG_OUT: {
      return {
        ...state,
        token: null,
        ID: null,
        auth: false,
        Type: 'user',
      };
    }
    case Action.SET_TYPE: {
      return {
        ...state,
        Type: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default Reducer;
