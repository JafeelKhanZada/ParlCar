import * as Action from '../constant';
const initState = {
  City: [],
  Brands: [],
  Categories: [],
  PriceList: [],
  MileList: [],
  YearsList: [],
  BodyType: [],
  CityName: '',
  Country: [],
  Model: [],
  Color: [
    'Black',
    'Blue',
    'Brown',
    'Burgundy',
    'Gold',
    'Grey',
    'Orange',
    'Green',
    'Purple',
    'Red',
    'Silver',
    'Tan',
    'Teal',
    'White',
    'Yellow',
    'Other Color',
  ],
  CarOrigin: ['Private', 'Taxi'],
  DOORS: ['2', '3', '4', '5+'],
  TRANSMISSION: ['Automatic', 'Manual'],
  FuelType: ['Gasoline', 'Diesel', 'Hybrid'],
  Options: [],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_MODEL_BY_BRAND_ID: {
      return {
        ...state,
        Model: action.payload,
      };
    }
    case Action.GET_OPTION: {
      return {
        ...state,
        Options: action.payload,
      };
    }
    case Action.GET_COUNTRY: {
      return {
        ...state,
        Country: action.payload,
      };
    }
    case Action.SET_CITY: {
      return {
        ...state,
        CityName: action.payload,
      };
    }
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
