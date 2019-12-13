import * as Action from '../constant';
const InitState = {
  TotalPages: 0,
  ActiveAds: [],
  SelectedAd: [],
};
const AdsReducer = (state = InitState, action) => {
  switch (action.type) {
    case Action.GET_ADS_PAGES: {
      return {
        ...state,
        ActiveAds: action.payload,
      };
    }
    case Action.SELECT_AD: {
      return {
        ...state,
        SelectedAd: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default AdsReducer;
