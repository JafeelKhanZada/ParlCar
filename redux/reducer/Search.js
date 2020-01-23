import * as Action from '../constant';
const initState = {
  nCity: null,
  nModel: null,
  nPriceFrom: null,
  nPriceTo: null,
  nYearFrom: null,
  nYearTo: null,
  nKiloMeterFrom: null,
  nKiloMeterTo: null,
  Models: null,
  Brand: null,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.SET_SPECIFIC_SEARCH: {
      return {
        ...state,
        [action.payload.name]: action.payload.val,
      };
    }
    case Action.SET_CITY: {
      return {
        ...state,
        nCity: action.payload,
      };
    }
    case Action.SET_SEARCH: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case Action.DEFAULT_SEARCH: {
      return {
        ...state,
        ...initState,
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
