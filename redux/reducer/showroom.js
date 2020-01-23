import * as Action from '../constant';
const initState = {
  ActiveShowRoom: [],
  TotalShowRoom: [],
  Load: true,
};
const showroomReducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_SHOWROOM: {
      return {
        ...state,
        TotalShowRoom: action.payload,
      };
    }
    case Action.SET_ACTIVE_SHOWROOM: {
      return {
        ...state,
        ActiveShowRoom: action.payload,
      };
    }
    case Action.SET_LOAD_SHOWROOM: {
      return {
        ...state,
        Load: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default showroomReducer;
