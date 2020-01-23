import * as Action from '../constant';
const InitState = {
  TotalPages: 0,
  ActiveAds: [],
  SelectedAd: [],
  ActivatedAds: [],
  PendingAds: [],
  ExpiredAd: [],
  DeletedAd: [],
  History: [],
};
const AdsReducer = (state = InitState, action) => {
  switch (action.type) {
    case Action.GET_ADS_PAGES: {
      return {
        ...state,
        ActiveAds: action.payload,
      };
    }
    case Action.GET_HISTORY_AD: {
      return {
        ...state,
        History: action.payload,
      };
    }
    case Action.GET_DELETED_AD: {
      return {
        ...state,
        DeletedAd: action.payload,
      };
    }
    case Action.SELECT_AD: {
      return {
        ...state,
        SelectedAd: action.payload,
      };
    }
    case Action.GET_ACTIVE_ADS: {
      return {
        ...state,
        ActivatedAds: action.payload,
      };
    }
    case Action.GET_PENDING_ADS: {
      return {
        ...state,
        PendingAds: action.payload,
      };
    }
    case Action.GET_DELETED_ADS: {
      return {
        ...state,
        ExpiredAd: action.payload,
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
