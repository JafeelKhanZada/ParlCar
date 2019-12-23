import * as Action from '../constant';
const initState = {
  City: [],
  Brands: [],
  Categories: [],
  PriceList: [],
  MileList: [],
  YearsList: [],
  BodyType: [],
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
    case Action.GET_CATEGORIES: {
      return {
        ...state,
        Categories: action.payload,
      };
    }
    case Action.GET_PRICE_LIST: {
      return {
        ...state,
        PriceList: action.payload,
      };
    }
    case Action.GET_MILES: {
      return {
        ...state,
        MileList: action.payload,
      };
    }
    case Action.GET_YEARS: {
      return {
        ...state,
        YearsList: action.payload,
      };
    }
    case Action.GET_BODY_TYPE: {
      return {
        ...state,
        BodyType: action.payload,
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
