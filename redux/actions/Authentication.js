import * as Action from '../constant';
import * as Actions from './index';
import axios from 'axios';
export const toggleAuth = payload => {
  return {
    type: Action.TOGGLE_AUTH,
    payload,
  };
};
export const login = (username, password) => {
  let config = {
    nUserName: 'sample string 1',
    token: 'sample string 2',
    nName: username,
    nPassword: password,
  };
  let request = axios.post(
    'http://palcar.graffitecs.com/Api/UserAuthentication',
    config,
    {headers: Action.headers},
  );
  return dispatch => {
    dispatch(Actions.toggleLoader(true));
    request.then(response => {
      dispatch(Actions.toggleLoader(false));
      if (response.data.result) {
        dispatch(toggleAuth(true));
        dispatch(Actions.Toggle_PopUp(false));
      } else {
        dispatch(Actions.toggleAuth(false));
      }
    });
  };
};
