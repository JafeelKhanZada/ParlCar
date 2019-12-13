import {combineReducers} from 'redux';
import Auth from './Authentication';
import Ads from './Ads';
import Modal from '../reducer/Modals';
import Showroom from './showroom';
import * as Action from '../constant';
const stateLoader = {value: false};
const loaderReducer = (state = stateLoader, action) => {
  switch (action.type) {
    case Action.TOGGLE_LOADER: {
      return {
        ...state,
        value: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
const ROOT_REDUCER = combineReducers({
  Auth,
  Ads,
  Modal,
  Loader: loaderReducer,
  Showroom,
});
export default ROOT_REDUCER;
