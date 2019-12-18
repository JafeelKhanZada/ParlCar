import * as Action from '../constant';
const initState = {
  City: [],
  Brands: [],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_CITY: {
      return {
        ...state,
        City: action.payload,
      };
    }
    case Action.GET_BRANDS: {
      return {
        ...state,
        Brands: action.payload,
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
