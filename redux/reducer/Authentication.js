import * as Action from '../constant';
const initState = {
  auth: true,
  UserData: [],
};
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.TOGGLE_AUTH: {
      return {
        ...state,
        auth: action.payload,
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
